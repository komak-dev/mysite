---
title: first post
tags: [next.js, react]
---

# The First Post

[link](https://zenn.dev/angelecho/articles/8f200e51a6b475)

https://zenn.dev/angelecho/articles/8f200e51a6b475

https://youtube.com

this is p tag yeah!!!


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


