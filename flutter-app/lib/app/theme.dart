import 'package:flutter/material.dart';

/// Design system: 8pt grid, 44px tap targets, AA contrast
class LilavathiTheme {
  // Spacing (8pt grid)
  static const double spacing1 = 8.0;
  static const double spacing2 = 16.0;
  static const double spacing3 = 24.0;
  static const double spacing4 = 32.0;
  static const double spacing5 = 40.0;
  static const double spacing6 = 48.0;

  // Tap target minimum
  static const double minTapTarget = 44.0;

  // Colors
  static const Color primaryLight = Color(0xFF1565C0); // Blue 800
  static const Color primaryDark = Color(0xFF42A5F5);  // Blue 400
  static const Color accent = Color(0xFFFF8F00);       // Amber 800
  static const Color error = Color(0xFFD32F2F);
  static const Color success = Color(0xFF388E3C);

  static ThemeData get light => ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    colorScheme: ColorScheme.fromSeed(
      seedColor: primaryLight,
      brightness: Brightness.light,
    ),
    appBarTheme: const AppBarTheme(
      centerTitle: true,
      elevation: 0,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        minimumSize: const Size(88, minTapTarget),
        padding: const EdgeInsets.symmetric(
          horizontal: spacing2,
          vertical: spacing1,
        ),
      ),
    ),
    inputDecorationTheme: const InputDecorationTheme(
      border: OutlineInputBorder(),
      contentPadding: EdgeInsets.symmetric(
        horizontal: spacing2,
        vertical: spacing1 * 1.5,
      ),
    ),
    cardTheme: CardTheme(
      elevation: 2,
      margin: const EdgeInsets.all(spacing1),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(spacing1),
      ),
    ),
  );

  static ThemeData get dark => ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: ColorScheme.fromSeed(
      seedColor: primaryDark,
      brightness: Brightness.dark,
    ),
    appBarTheme: const AppBarTheme(
      centerTitle: true,
      elevation: 0,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        minimumSize: const Size(88, minTapTarget),
        padding: const EdgeInsets.symmetric(
          horizontal: spacing2,
          vertical: spacing1,
        ),
      ),
    ),
    inputDecorationTheme: const InputDecorationTheme(
      border: OutlineInputBorder(),
      contentPadding: EdgeInsets.symmetric(
        horizontal: spacing2,
        vertical: spacing1 * 1.5,
      ),
    ),
    cardTheme: CardTheme(
      elevation: 2,
      margin: const EdgeInsets.all(spacing1),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(spacing1),
      ),
    ),
  );
}
