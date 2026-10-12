import { create } from "zustand";

export interface ExerciseSet {
  id: string;
  setNumber: number;
  weight: number;
  reps: number;
  completed: boolean;
}

export interface ActiveExercise {
  id: string;
  name: string;
  category: "AGACHAR" | "EMPURRAR" | "PUXAR" | "QUADRIL" | "CORE";
  equipment: string;
  previousRecord?: { weight: number; reps: number };
  sets: ExerciseSet[];
}

export interface WorkoutProgram {
  id: string;
  title: string;
  division: string; // e.g., "Full Body", "Upper / Lower", "Push / Pull / Legs"
  frequencyDays: number;
  exercises: ActiveExercise[];
}

interface WorkoutState {
  currentProgram: WorkoutProgram | null;
  activeWorkout: {
    title: string;
    exercises: ActiveExercise[];
    startedAt: string;
    currentExerciseIndex: number;
  } | null;
  history: Array<{
    id: string;
    date: string;
    title: string;
    durationMinutes: number;
    totalVolumeKg: number;
    repMilestone: string;
  }>;
  setCurrentProgram: (program: WorkoutProgram) => void;
  startWorkout: () => void;
  updateSet: (exerciseIndex: number, setIndex: number, data: Partial<ExerciseSet>) => void;
  finishWorkout: () => { durationMinutes: number; totalVolumeKg: number; newRecord: boolean };
}

const MOCK_DEFAULT_PROGRAM: WorkoutProgram = {
  id: "prog_1",
  title: "Treino A - Superior & Core",
  division: "Upper / Lower",
  frequencyDays: 3,
  exercises: [
    {
      id: "ex_1",
      name: "Supino Reto com Halteres",
      category: "EMPURRAR",
      equipment: "Halteres",
      previousRecord: { weight: 16, reps: 10 },
      sets: [
        { id: "s1", setNumber: 1, weight: 16, reps: 12, completed: false },
        { id: "s2", setNumber: 2, weight: 16, reps: 10, completed: false },
        { id: "s3", setNumber: 3, weight: 18, reps: 8, completed: false },
      ],
    },
    {
      id: "ex_2",
      name: "Puxada Frontal Pulley",
      category: "PUXAR",
      equipment: "Cabo / Pulley",
      previousRecord: { weight: 40, reps: 10 },
      sets: [
        { id: "s4", setNumber: 1, weight: 40, reps: 10, completed: false },
        { id: "s5", setNumber: 2, weight: 45, reps: 8, completed: false },
        { id: "s6", setNumber: 3, weight: 45, reps: 8, completed: false },
      ],
    },
    {
      id: "ex_3",
      name: "Desenvolvimento de Ombro",
      category: "EMPURRAR",
      equipment: "Halteres",
      previousRecord: { weight: 12, reps: 10 },
      sets: [
        { id: "s7", setNumber: 1, weight: 12, reps: 10, completed: false },
        { id: "s8", setNumber: 2, weight: 12, reps: 10, completed: false },
      ],
    },
  ],
};

export const useWorkoutStore = create<WorkoutState>((set, get) => ({
  currentProgram: MOCK_DEFAULT_PROGRAM,
  activeWorkout: null,
  history: [
    {
      id: "hist_0",
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
      title: "Treino B - Membros Inferiores",
      durationMinutes: 42,
      totalVolumeKg: 2450,
      repMilestone: "REP 000",
    },
  ],

  setCurrentProgram: (program) => set({ currentProgram: program }),

  startWorkout: () => {
    const { currentProgram } = get();
    if (!currentProgram) return;

    set({
      activeWorkout: {
        title: currentProgram.title,
        exercises: JSON.parse(JSON.stringify(currentProgram.exercises)),
        startedAt: new Date().toISOString(),
        currentExerciseIndex: 0,
      },
    });
  },

  updateSet: (exerciseIndex, setIndex, data) => {
    const { activeWorkout } = get();
    if (!activeWorkout) return;

    const newExercises = [...activeWorkout.exercises];
    const targetExercise = { ...newExercises[exerciseIndex] };
    const newSets = [...targetExercise.sets];

    newSets[setIndex] = { ...newSets[setIndex], ...data };
    targetExercise.sets = newSets;
    newExercises[exerciseIndex] = targetExercise;

    set({
      activeWorkout: {
        ...activeWorkout,
        exercises: newExercises,
      },
    });
  },

  finishWorkout: () => {
    const { activeWorkout, history } = get();
    if (!activeWorkout) return { durationMinutes: 0, totalVolumeKg: 0, newRecord: false };

    const startTime = new Date(activeWorkout.startedAt).getTime();
    const durationMinutes = Math.max(1, Math.round((Date.now() - startTime) / 60000));

    let totalVolumeKg = 0;
    activeWorkout.exercises.forEach((ex) => {
      ex.sets.forEach((s) => {
        if (s.completed) {
          totalVolumeKg += s.weight * s.reps;
        }
      });
    });

    const newHistoryEntry = {
      id: `hist_${Date.now()}`,
      date: new Date().toISOString(),
      title: activeWorkout.title,
      durationMinutes,
      totalVolumeKg,
      repMilestone: `REP ${String(history.length + 1).padStart(3, "0")}`,
    };

    set({
      activeWorkout: null,
      history: [newHistoryEntry, ...history],
    });

    return { durationMinutes, totalVolumeKg, newRecord: true };
  },
}));
