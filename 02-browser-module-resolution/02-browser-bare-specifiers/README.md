## 02 How do "bare" specifiers work in the browser?

- Browsers interpret the specifier in `import {something} from './some/relative/path.js` easily - they just resolve the URL from the current module's URL, and then HTTP GET-s it.

- And we've seen how the browser crashes when receiving a bare specifier like `p-thrrotle`.

- Well, of course it doesn't! The browser doesn't know how to resolve that weird specifier?

- What is that? It's called a "bare" specifier, because it is bare of any indication of how to resolve it!

- Which is why the browser crashes.

- But we can give it a hint using **import maps**.

```jsx
<script type="importmap">{
	"imports": {
		"p-throttle": "https://esm.sh/p-throttle@@7.0.0"
	}
}</script>
```

- And now our script works!

- There is more in how `importmap` works, but I'll leave that as an exercise to the reader.
