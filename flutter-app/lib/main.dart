import 'package:flutter/material.dart';
import 'app/router.dart';
import 'app/theme.dart';

void main() {
  runApp(const LilavathiApp());
}

class LilavathiApp extends StatelessWidget {
  const LilavathiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Lilavathi',
      theme: LilavathiTheme.light,
      darkTheme: LilavathiTheme.dark,
      themeMode: ThemeMode.system,
      routerConfig: appRouter,
      debugShowCheckedModeBanner: false,
    );
  }
}
