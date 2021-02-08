'use strict';

app.directive('decorate', function () {
    return {
        template: 'Item "{{ item.name }}" est dans la categorie {{ item.category_id }}'
    }
})