1. Вбудовані стилі
2. Ванільний css
3. Глобальний простір імен
4. CSS-модулі
5. composes
6. Нормалізація стилів
7. Практика:
   - colorPicker
   - alert
   - додаємо самостійно стилі до painting

```json
const colorPickerOptions = [ { label: 'red', color: '#F44336' }, { label:
'green', color: '#4CAF50' }, { label: 'blue', color: '#2196F3' }, { label:
'grey', color: '#607D8B' }, { label: 'pink', color: '#E91E63' }, { label:
'indigo', color: '#3F51B5' }, ];
```

## компонент 'ColorPicker'

```html
<div>
	<h2>Color Picker</h2>
	<div>
		<span>label</span>
	</div>
</div>
```

## компонент 'Alert'

Alert Властивість 'type' може бути лише 'error' 'success' або 'warning'

```html
<p className="alert"></p>
```
