import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/spacing.dart';

/// Main shell with 4-tab bottom navigation
class MainShell extends StatelessWidget {
  final Widget child;

  const MainShell({super.key, required this.child});

  static const _tabs = [
    _TabItem(icon: Icons.school, label: 'Learn', path: '/learn'),
    _TabItem(icon: Icons.fitness_center, label: 'Practice', path: '/practice'),
    _TabItem(icon: Icons.library_books, label: 'Library', path: '/library'),
    _TabItem(icon: Icons.person, label: 'Profile', path: '/profile'),
  ];

  int _getCurrentIndex(BuildContext context) {
    final location = GoRouterState.of(context).uri.path;
    for (var i = 0; i < _tabs.length; i++) {
      if (location.startsWith(_tabs[i].path)) return i;
    }
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    final currentIndex = _getCurrentIndex(context);

    return Scaffold(
      body: child,
      bottomNavigationBar: NavigationBar(
        selectedIndex: currentIndex,
        onDestinationSelected: (index) {
          context.go(_tabs[index].path);
        },
        height: Spacing.s6 + Spacing.s3, // 48 + 24 = 72px (>44px tap target)
        destinations: _tabs
            .map((tab) => NavigationDestination(
                  icon: Icon(tab.icon),
                  label: tab.label,
                ))
            .toList(),
      ),
    );
  }
}

class _TabItem {
  final IconData icon;
  final String label;
  final String path;

  const _TabItem({
    required this.icon,
    required this.label,
    required this.path,
  });
}
