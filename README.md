# A bounty for dinner

## Proposed X post

```text
Half a cabbage, one egg, a lemon. I'd offer a bounty for an app that turns those into dinner. What would you pay someone to build?

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-thrush-microbe-nougat
https://x.com/makefunai/status/2124915864336236646
```

The draft is a standalone X post with [one original photo](fridge-bounty.png) attached.

**Alt text**

Half a green cabbage, a brown egg, and a yellow lemon on a nearly empty refrigerator shelf.

## Check the entrypoint

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cmp POST.json out/POST.json
```

The Node entrypoint copies `POST.json` byte for byte. The file holds a placeholder for the future X post URL.

## How the photo was made

The built-in image generation tool made the photo during this Codex session.

<details>
<summary>Image prompt</summary>

Use case: photorealistic-natural. Create an original 4:3 editorial photograph to accompany an X post about a hypothetical bounty for turning three leftover ingredients into dinner. Shoot from just inside an almost empty home refrigerator, looking straight at the center glass shelf, with exactly three food items spaced in a row: a half head of green cabbage with its cut side facing camera, one brown egg, and one whole yellow lemon. The cabbage is large and sculptural, the egg modest, the lemon slightly dimpled. Low camera angle at shelf level with all three items in focus, cool white refrigerator light, soft shadows and subtle glass reflections, restrained off-white and slate background. Thoughtful magazine food photography with real texture and everyday simplicity. Keep all three foods comfortably inside the central frame for mobile cropping. No people, text, logos, labels, packaging, graphic overlays, or watermark.

</details>
