import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../screens/splash/splash_screen.dart';
import '../shared/components/navigation/main_shell.dart';
import '../features/learn/view/home_screen.dart';
import '../features/practice/view/practice_screen.dart';
import '../features/library/view/library_screen.dart';
import '../features/profile/view/profile_screen.dart';

final appRouter = GoRouter(
  initialLocation: '/splash',
  routes: [
    // Splash screen
    GoRoute(
      path: '/splash',
      builder: (context, state) => const SplashScreen(),
    ),

    // Main shell with bottom navigation (4 tabs)
    ShellRoute(
      builder: (context, state, child) => MainShell(child: child),
      routes: [
        // Tab 1: Learn
        GoRoute(
          path: '/learn',
          pageBuilder: (context, state) => const NoTransitionPage(
            child: HomeScreen(),
          ),
        ),
        // Tab 2: Practice
        GoRoute(
          path: '/practice',
          pageBuilder: (context, state) => const NoTransitionPage(
            child: PracticeScreen(),
          ),
        ),
        // Tab 3: Library
        GoRoute(
          path: '/library',
          pageBuilder: (context, state) => const NoTransitionPage(
            child: LibraryScreen(),
          ),
        ),
        // Tab 4: Profile
        GoRoute(
          path: '/profile',
          pageBuilder: (context, state) => const NoTransitionPage(
            child: ProfileScreen(),
          ),
        ),
      ],
    ),

    // TODO: Add routes for:
    // - /onboarding
    // - /auth/signin
    // - /verse/:id
    // - /solve/:id
    // - /results
  ],
);
