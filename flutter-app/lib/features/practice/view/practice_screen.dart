import 'package:flutter/material.dart';
import '../../../shared/theme/spacing.dart';

class PracticeScreen extends StatelessWidget {
  const PracticeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Practice'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(Spacing.s2),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.fitness_center,
                size: 64,
                color: Theme.of(context).colorScheme.primary,
              ),
              const SizedBox(height: Spacing.s2),
              Text(
                'Practice Mode',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: Spacing.s1),
              Text(
                'Complete lessons to unlock practice drills',
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                      color: Theme.of(context).colorScheme.onSurfaceVariant,
                    ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: Spacing.s3),
              FilledButton.icon(
                onPressed: () {
                  // TODO: Start practice drill
                },
                icon: const Icon(Icons.play_arrow),
                label: const Text('Start Practice'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
