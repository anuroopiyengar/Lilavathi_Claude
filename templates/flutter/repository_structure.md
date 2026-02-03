# Flutter repo structure (recommended starter)

```
lib/
  app/
    router.dart
    theme.dart
    constants.dart

  core/
    api/
      sanity_client.dart
    cache/
    errors/
    utils/

  # 4-Tab navigation features
  features/
    learn/                          # Tab 1
      view/
        home_screen.dart            # Screen 7: Home (Today)
        learn_path_screen.dart      # Screen 8: Learn Path
      state/
      data/

    practice/                       # Tab 2
      view/
        practice_drill_screen.dart  # Screen 12: Practice drill
        results_screen.dart         # Screen 13: Results + Mastery
      state/
      data/

    library/                        # Tab 3
      view/
        chapter_list_screen.dart    # Screen 9: Chapter list
        search_screen.dart          # Screen 17: Search + Filters
      state/
      data/

    profile/                        # Tab 4
      view/
        profile_screen.dart         # Screen 15: Profile (student)
        achievements_screen.dart    # Screen 14: Achievements
        parent_dashboard_screen.dart # Screen 16: Parent Dashboard
        settings_screen.dart        # Screen 18: Settings
      state/
      data/

  # Screens outside tab navigation
  screens/
    splash/
      splash_screen.dart            # Screen 1
    onboarding/
      onboarding_screen.dart        # Screens 2-4 (carousel)
    auth/
      sign_in_screen.dart           # Screen 5
      choose_level_screen.dart      # Screen 6
    verse_detail/
      verse_detail_screen.dart      # Screen 10
    solve/
      solve_screen.dart             # Screen 11: Solve Step-by-step

  # Design system components
  shared/
    components/
      buttons/
        primary_button.dart
        secondary_button.dart
      cards/
        verse_card.dart             # locked/in-progress/completed
      chips/
        tag_chip.dart               # selected/unselected/disabled
      progress/
        progress_ring.dart
        xp_bar.dart
      inputs/
        input_field.dart            # normal/error/success
      feedback/
        modal_sheet.dart
        toast.dart
        empty_state.dart
        skeleton_loader.dart
      navigation/
        bottom_nav_bar.dart         # 4-tab navigation
    theme/
      colors.dart
      typography.dart
      spacing.dart                  # 8pt grid

  main.dart

test/
  features/
    learn/
    practice/
    library/
    profile/
  screens/
  shared/
  core/
```
