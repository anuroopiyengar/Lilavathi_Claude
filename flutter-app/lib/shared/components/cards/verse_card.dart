import 'package:flutter/material.dart';
import '../../theme/spacing.dart';

enum VerseCardState { locked, inProgress, completed }

/// Verse card with locked/in-progress/completed states
class VerseCard extends StatelessWidget {
  final String excerptId;
  final String excerptText;
  final int confidence;
  final VerseCardState state;
  final VoidCallback? onTap;

  const VerseCard({
    super.key,
    required this.excerptId,
    required this.excerptText,
    required this.confidence,
    required this.state,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final isLocked = state == VerseCardState.locked;
    final isCompleted = state == VerseCardState.completed;

    return Opacity(
      opacity: isLocked ? 0.5 : 1.0,
      child: Card(
        child: InkWell(
          onTap: isLocked ? null : onTap,
          borderRadius: BorderRadius.circular(Spacing.s1),
          child: Padding(
            padding: const EdgeInsets.all(Spacing.s2),
            child: Row(
              children: [
                // State indicator
                _StateIcon(state: state),
                const SizedBox(width: Spacing.s2),

                // Content
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            excerptId,
                            style:
                                Theme.of(context).textTheme.titleMedium?.copyWith(
                                      fontWeight: FontWeight.bold,
                                    ),
                          ),
                          const Spacer(),
                          _ConfidenceBadge(confidence: confidence),
                        ],
                      ),
                      const SizedBox(height: Spacing.s1 / 2),
                      Text(
                        excerptText,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                              color: Theme.of(context)
                                  .colorScheme
                                  .onSurfaceVariant,
                            ),
                      ),
                    ],
                  ),
                ),

                // Chevron
                if (!isLocked) ...[
                  const SizedBox(width: Spacing.s1),
                  Icon(
                    Icons.chevron_right,
                    color: Theme.of(context).colorScheme.onSurfaceVariant,
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _StateIcon extends StatelessWidget {
  final VerseCardState state;

  const _StateIcon({required this.state});

  @override
  Widget build(BuildContext context) {
    IconData icon;
    Color color;

    switch (state) {
      case VerseCardState.locked:
        icon = Icons.lock;
        color = Theme.of(context).colorScheme.outline;
        break;
      case VerseCardState.inProgress:
        icon = Icons.play_circle;
        color = Theme.of(context).colorScheme.primary;
        break;
      case VerseCardState.completed:
        icon = Icons.check_circle;
        color = Colors.green;
        break;
    }

    return Container(
      width: Spacing.minTapTarget,
      height: Spacing.minTapTarget,
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(Spacing.s1),
      ),
      child: Icon(icon, color: color),
    );
  }
}

class _ConfidenceBadge extends StatelessWidget {
  final int confidence;

  const _ConfidenceBadge({required this.confidence});

  @override
  Widget build(BuildContext context) {
    Color color;
    if (confidence >= 70) {
      color = Colors.green;
    } else if (confidence >= 50) {
      color = Colors.orange;
    } else {
      color = Colors.red;
    }

    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: Spacing.s1,
        vertical: Spacing.s1 / 4,
      ),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(Spacing.s1 / 2),
      ),
      child: Text(
        '$confidence%',
        style: Theme.of(context).textTheme.labelSmall?.copyWith(
              color: color,
              fontWeight: FontWeight.bold,
            ),
      ),
    );
  }
}
