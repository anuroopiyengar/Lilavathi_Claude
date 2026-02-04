import 'package:flutter/material.dart';
import '../../theme/spacing.dart';

/// Tag chip with selected/unselected/disabled states
class TagChip extends StatelessWidget {
  final String label;
  final bool isSelected;
  final bool isDisabled;
  final VoidCallback? onTap;

  const TagChip({
    super.key,
    required this.label,
    this.isSelected = false,
    this.isDisabled = false,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    Color backgroundColor;
    Color foregroundColor;

    if (isDisabled) {
      backgroundColor = colorScheme.surfaceContainerHighest.withOpacity(0.5);
      foregroundColor = colorScheme.onSurface.withOpacity(0.38);
    } else if (isSelected) {
      backgroundColor = colorScheme.primaryContainer;
      foregroundColor = colorScheme.onPrimaryContainer;
    } else {
      backgroundColor = colorScheme.surfaceContainerHighest;
      foregroundColor = colorScheme.onSurfaceVariant;
    }

    return Material(
      color: backgroundColor,
      borderRadius: BorderRadius.circular(Spacing.s1),
      child: InkWell(
        onTap: isDisabled ? null : onTap,
        borderRadius: BorderRadius.circular(Spacing.s1),
        child: Container(
          constraints: const BoxConstraints(
            minHeight: Spacing.minTapTarget,
          ),
          padding: const EdgeInsets.symmetric(
            horizontal: Spacing.s2,
            vertical: Spacing.s1,
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (isSelected) ...[
                Icon(
                  Icons.check,
                  size: 18,
                  color: foregroundColor,
                ),
                const SizedBox(width: Spacing.s1 / 2),
              ],
              Text(
                label,
                style: Theme.of(context).textTheme.labelLarge?.copyWith(
                      color: foregroundColor,
                    ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
