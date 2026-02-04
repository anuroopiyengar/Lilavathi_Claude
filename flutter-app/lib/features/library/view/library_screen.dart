import 'package:flutter/material.dart';
import '../../../shared/theme/spacing.dart';
import '../../../shared/components/chips/tag_chip.dart';

class LibraryScreen extends StatelessWidget {
  const LibraryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Library'),
        actions: [
          IconButton(
            icon: const Icon(Icons.search),
            onPressed: () {
              // TODO: Navigate to search
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(Spacing.s2),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Filter chips
            Wrap(
              spacing: Spacing.s1,
              runSpacing: Spacing.s1,
              children: const [
                TagChip(label: 'All', isSelected: true),
                TagChip(label: '7.NS.A'),
                TagChip(label: 'HSN-Q★'),
                TagChip(label: '7.EE.B'),
              ],
            ),

            const SizedBox(height: Spacing.s3),

            // Chapter list
            Text(
              'Chapters',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: Spacing.s2),

            _ChapterTile(
              chapter: 1,
              title: 'Definitions',
              problems: 20,
              completed: 15,
            ),
            _ChapterTile(
              chapter: 2,
              title: 'Numeration',
              problems: 18,
              completed: 8,
            ),
            _ChapterTile(
              chapter: 3,
              title: 'Arithmetic Operations',
              problems: 25,
              completed: 0,
            ),
          ],
        ),
      ),
    );
  }
}

class _ChapterTile extends StatelessWidget {
  final int chapter;
  final String title;
  final int problems;
  final int completed;

  const _ChapterTile({
    required this.chapter,
    required this.title,
    required this.problems,
    required this.completed,
  });

  @override
  Widget build(BuildContext context) {
    final progress = problems > 0 ? completed / problems : 0.0;

    return Card(
      child: ListTile(
        contentPadding: const EdgeInsets.all(Spacing.s2),
        leading: CircleAvatar(
          child: Text('$chapter'),
        ),
        title: Text(title),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: Spacing.s1 / 2),
            LinearProgressIndicator(value: progress),
            const SizedBox(height: Spacing.s1 / 2),
            Text('$completed / $problems problems'),
          ],
        ),
        trailing: const Icon(Icons.chevron_right),
        onTap: () {
          // TODO: Navigate to chapter
        },
      ),
    );
  }
}
