import mongoose from 'mongoose';
import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Workout } from '../models/workout';

// Seed the octofit_db database with test data
async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB for seeding');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    {
      name: 'Maya Chen',
      email: 'maya.chen@example.com',
      role: 'Athlete',
      fitnessGoal: 'Run a half marathon',
    },
    {
      name: 'Liam Ortiz',
      email: 'liam.ortiz@example.com',
      role: 'Coach',
      fitnessGoal: 'Improve strength and mobility',
    },
    {
      name: 'Nia Brooks',
      email: 'nia.brooks@example.com',
      role: 'Athlete',
      fitnessGoal: 'Increase cycling endurance',
    },
  ]);

  const teams = await Team.insertMany([
    {
      name: 'Ocean Runners',
      members: 4,
      focus: 'Endurance',
      description: 'A weekend running club focused on long-distance progress.',
    },
    {
      name: 'Peak Cyclists',
      members: 3,
      focus: 'Strength',
      description: 'A high-energy cycling squad training for hill climbs.',
    },
  ]);

  const activities = await Activity.insertMany([
    {
      type: 'Run',
      durationMinutes: 35,
      distanceKm: 5.2,
      date: '2026-07-02',
      notes: 'Morning tempo run along the river trail.',
    },
    {
      type: 'Strength',
      durationMinutes: 45,
      distanceKm: 0,
      date: '2026-07-01',
      notes: 'Full-body circuit focusing on squats and pull-ups.',
    },
    {
      type: 'Cycle',
      durationMinutes: 60,
      distanceKm: 24,
      date: '2026-07-03',
      notes: 'Steady-state ride with interval bursts.',
    },
  ]);

  const leaderboard = await Leaderboard.insertMany([
    { rank: 1, name: users[0].name, score: 985, badge: 'Gold' },
    { rank: 2, name: users[2].name, score: 942, badge: 'Silver' },
    { rank: 3, name: users[1].name, score: 908, badge: 'Bronze' },
  ]);

  const workouts = await Workout.insertMany([
    {
      title: 'HIIT Cardio',
      focus: 'Cardio',
      durationMinutes: 25,
      difficulty: 'Intermediate',
    },
    {
      title: 'Core Strength',
      focus: 'Core',
      durationMinutes: 20,
      difficulty: 'Beginner',
    },
    {
      title: 'Hill Intervals',
      focus: 'Endurance',
      durationMinutes: 30,
      difficulty: 'Advanced',
    },
  ]);

  console.log(`Seeded ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${leaderboard.length} leaderboard entries, and ${workouts.length} workouts.`);

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seed failed', error);
  process.exit(1);
});
