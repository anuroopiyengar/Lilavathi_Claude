# Feature structure template

## Basic feature folder
```
lib/features/<feature>/
  view/
    <feature>_screen.dart
    widgets/                    # Feature-specific widgets
  state/
    <feature>_controller.dart
    <feature>_state.dart
  data/
    <feature>_repository.dart
    <feature>_models.dart
```

## 4-Tab navigation features
```
lib/features/
  learn/                        # Tab 1: Learn
    view/
      home_screen.dart          # Today view with progress
      learn_path_screen.dart    # Chapter milestones
    state/
    data/

  practice/                     # Tab 2: Practice
    view/
      practice_drill_screen.dart
      results_screen.dart
    state/
    data/

  library/                      # Tab 3: Library
    view/
      chapter_list_screen.dart
      search_screen.dart
    state/
    data/

  profile/                      # Tab 4: Profile
    view/
      profile_screen.dart
      achievements_screen.dart
      parent_dashboard_screen.dart
      settings_screen.dart
    state/
    data/
```

## Shared screens (outside tabs)
```
lib/screens/
  splash/
  onboarding/
  auth/
  verse_detail/
  solve/
```
