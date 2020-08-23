# Flex Layouts

You can use our flex directives instead of writing css rules in every component.

## Install

```bash
$ npm install @angular-ru/flex-layout
```

-   Add styles to `styles.scss`

```scss
@import '~@angular-ru/flex-layout/styles';

// ...
```

```ts
import { FlexLayoutModule } from '@angular-ru/flex-layout';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        // ...
        FlexLayoutModule
    ]
})
export class AppModule {}
```
