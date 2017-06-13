# Тестовое задание из Pro Group Consult

Для удобства, я клонирвал содержимое папки "dist" в папку "docs" с целью возможности просмотра страницы на GitHub Pages.

### _В данной работе я использовал такие технологии:_
* HTML5
* CSS3
* SASS preprocessing
* Bootstrap 4
* JS
* jQuery
* Git
* npm
* Bower
* Gulp

**Gulpfile.js:**
```javascript
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    imagemin = require('gulp-imagemin'),
    del = require('del');
```
**Dependencies (bower.json):**
```javascript
"dependencies": {
  "bootstrap": "v4.0.0-alpha.6"
}
```

_Просмотроите мою работу [тут](https://oxyyyyy.github.io/test_task_from_ProGroupConsult/)_

## Спасибо!
Copyright (c) 2017 Copyright Holder All Rights Reserved.
Author: Alexandr Vlasenko
