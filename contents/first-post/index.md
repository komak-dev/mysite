---
title: first post very long title test
tags: [next.js, react]
---

# The First Post

あいうえおかきくけこさしすせそ

[link](https://zenn.dev/angelecho/articles/8f200e51a6b475)

https://zenn.dev/angelecho/articles/8f200e51a6b475

https://youtube.com

this is p tag yeah!!!

aiuto`aiueo`aiueo

![sample](/sample.jpg)

![zenn](https://res.cloudinary.com/zenn/image/upload/s--pwjsPJQf--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Next.js%25E3%2581%25A7Markdown%25E3%2582%2592HTML%25E3%2581%25AB%25E5%25A4%2589%25E6%258F%259B%25E3%2581%2597%25E3%2581%25A6%25E8%2587%25AA%25E5%258B%2595%25E7%259B%25AE%25E6%25AC%25A1%25E7%2594%259F%25E6%2588%2590%25E6%25A9%259F%25E8%2583%25BD%25E3%2582%2592%25E5%25AE%259F%25E8%25A3%2585%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%2582%25E3%2581%2595%25E3%2581%258F%25E3%2582%2589%25E3%2583%25BC%25E3%2582%2581%25E3%2582%2593%2540%25E3%2583%2595%25E3%2583%25AB%25E3%2582%25B9%25E3%2582%25BF%25E3%2583%2583%25E3%2582%25AF%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzQ4OTA5MzA0M2IuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png)

```
nothing
```

```js:main.js
import { useFloating } from "@floating-ui/react";

function MyComponent() {
  const { refs, floatingStyles } = useFloating();

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  );
}
```

```python:main.py
def reading_DATA(batch=128, intensity=1.0):
    train_readingData = torch.utils.data.DataLoader(
        datasets.MNIST('./data',
            train=True,
            download=True,
            transform=transforms.Compose([
                transforms.ToTensor(),
                transforms.Lambda(lambda x: x * intensity)
            ])
        ),
        batch_size=batch,
        shuffle=True
    )
    test_readingData = torch.utils.data.DataLoader(
        datasets.MNIST('./data',
            train=False,
            transform=transforms.Compose([
                transforms.ToTensor(),
                transforms.Lambda(lambda x: x * intensity)
            ])
        ),
        batch_size=batch,
        shuffle=True
    )
    return {'train': train_readingData, 'test': test_readingData}
```
