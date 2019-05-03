'use strict';

import parse from './parser';

describe('medium/parser', () => {
  describe('parse', () => {
    const json = {
      'success': true,
      'payload': {
        'references': {
          'Post': {
            '153e1e9eef44': {
              'id': '153e1e9eef44',
              'versionId': '800125ac5496',
              'homeCollectionId': '',
              'title': 'Reddit News beta now supports mod functions',
              'content': {
                'subtitle': 'subtitle content',
              },
              'virtuals': {
                'allowNotes': true,
                'previewImage': {
                  'imageId': '1*-e2hgmsec0uiJh-WO6H9zA.jpeg',
                  'filter': '',
                  'backgroundSize': '',
                  'originalWidth': 512,
                  'originalHeight': 512,
                  'strategy': 'resample',
                  'height': 0,
                  'width': 0,
                },
                'readingTime': 1.0150943396226415,
              },
              'slug': 'example-slug',
              // 'previewContent': {
              //   'bodyModel': {
              //     'paragraphs': [
              //       {
              //         'name': 'e3c4',
              //         'type': 3,
              //         'text': 'Reddit News beta now supports mod functions',
              //         'markups': [],
              //         'alignment': 1,
              //       },
              //       {
              //         'name': '3413',
              //         'type': 4,
              //         'text': '',
              //         'markups': [],
              //         'layout': 9,
              //         'metadata': {
              //           'id': '1*-e2hgmsec0uiJh-WO6H9zA.jpeg',
              //           'originalWidth': 512,
              //           'originalHeight': 512,
              //         },
              //       },
              //       {
              //         'name': '0de6',
              //         'type': 1,
              // eslint-disable-next-line max-len
              //         'text': 'Reddit News is one of the best, if not the best, Reddit clients for Android right…',
              //         'markups': [],
              //         'alignment': 1,
              //       },
              //     ],
              //     'sections': [
              //       {
              //         'startIndex': 0,
              //       },
              //     ],
              //   },
              //   'isFullContent': false,
              // eslint-disable-next-line max-len
              //   'subtitle': 'Reddit News is one of the best, if not the best, Reddit clients for Android right now, and it just got better. As of now, you can perform…',
              // },
            },
          },
        },
      },
    };

    it('returns the posts', () => {
      const posts = parse(json);

      expect(posts).toEqual(
          [
            {
              id: '153e1e9eef44',
              version: '800125ac5496',
              title: 'Reddit News beta now supports mod functions',
              subtitle: 'subtitle content',
              slug: 'example-slug',
            },
          ]
      );
    });
  });
});
