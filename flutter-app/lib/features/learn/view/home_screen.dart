import 'package:flutter/material.dart';
import '../../../shared/theme/spacing.dart';
import '../../../shared/components/cards/verse_card.dart';
import '../../../shared/components/progress/progress_ring.dart';
import '../../../shared/components/progress/xp_bar.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Today'),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_outlined),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(Spacing.s2),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Progress section
            Card(
              child: Padding(
                padding: const EdgeInsets.all(Spacing.s2),
                child: Row(
                  children: [
                    const ProgressRing(
                      progress: 0.65,
                      size: 80,
                    ),
                    const SizedBox(width: Spacing.s2),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Daily Goal',
                            style: Theme.of(context).textTheme.titleMedium,
                          ),
                          const SizedBox(height: Spacing.s1),
                          const XPBar(current: 65, target: 100),
                          const SizedBox(height: Spacing.s1 / 2),
                          Text(
                            '65 / 100 XP',
                            style: Theme.of(context).textTheme.bodySmall,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),

            const SizedBox(height: Spacing.s3),

            // Continue learning section
            Text(
              'Continue Learning',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: Spacing.s2),

            // Verse cards (placeholder data)
            const VerseCard(
              excerptId: '§33',
              excerptText: 'Thus in the first example, we have a = 1, b = 4...',
              confidence: 60,
              state: VerseCardState.inProgress,
            ),
            const VerseCard(
              excerptId: '§36',
              excerptText: 'A fraction with cipher for its denominator...',
              confidence: 90,
              state: VerseCardState.completed,
            ),
            const VerseCard(
              excerptId: '§49',
              excerptText: 'If we want an arithmetical solution...',
              confidence: 75,
              state: VerseCardState.locked,
            ),
          ],
        ),
      ),
    );
  }
}
