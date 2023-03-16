let v1 = {
    {
        "window.openFilesInNewWindow": "off", //открывать файлы в новом окне
    
        "html.format.wrapLineLength": 140,
    
        //Main editor settings
        "editor.tabSize": 4,
        "editor.wordWrap": "on", // если строка не помещается на экран, перенсти на следующюю строку
        "editor.folding": true, // свернуть часть кода нажав на стрелку слева
        "editor.insertSpaces": true, // вставлять пробелы
        "editor.smoothScrolling": true,
        "editor.minimap.enabled": true, // мини карта
        "editor.detectIndentation": false, // идентификация файла, какое расширение ему поставить
        "editor.suggestSelection": "first", // порядок подставки свойств, сначала свойства потом сниппеты
        "editor.scrollBeyondLastLine": true, //Определяет, будет ли редактор прокручиваться за пределы последней строки.
        "editor.snippetSuggestions": "bottom", // подсказки появляются снизу
        "editor.multiCursorModifier": "ctrlCmd", // мульти курсор на ctrl
        "editor.renderControlCharacters": false, //Определяет, должен ли редактор отображать управляющие символы.
        //Управляет выделением символов, которые можно спутать с основными символами ASCII, кроме тех, которые являются общими для текущего пользовательского языкового стандарта.
        "editor.unicodeHighlight.ambiguousCharacters": false,
        "editor.unicodeHighlight.nonBasicASCII": false,
        "editor.formatOnSave": false, // форматировать код при сохранении файла
        "editor.formatOnPaste": false, //  форматировать при вставке фрагмента кода
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    
        //Appearance
        "editor.cursorBlinking": "smooth", // вид анимации курсора
        "editor.bracketPairColorization.enabled": true, // вложенные скобки будут разного цвета
        "editor.glyphMargin": false,
    
        //Font
        "editor.fontSize": 16, // размер шрифта
        "editor.fontLigatures": true, // у стрелочной функции стрелка сольётся в символ стрелки
        // "editor.fontFamily": "Pragmata Pro",
        "editor.fontFamily": "JetBrains Mono, IBM Plex Mono, monospace",
    
        //Explorer
        "explorer.confirmDelete": false, // подтверждение удаления
        "explorer.compactFolders": false, // если папка пустая, она отображается как папка в папке
        "explorer.confirmDragAndDrop": false, // подтверждение действия драгендропа
    
        //Workbench
        "workbench.activityBar.visible": true,
        //Разрешить уменьшение размера вкладок, когда доступного места недостаточно для отображения всех вкладок одновременно.
        "workbench.editor.tabSizing": "shrink",
        "workbench.editor.enablePreview": false, // всегда открывать в новой вкладке
        "workbench.iconTheme": "vscode-icons", // тема иконок
        "workbench.startupEditor": "newUntitledFile", // при загрузке редактора будет открываться новый пустой файл
    
        //Debug	отключить его нахер и то это ещё не всё
        "debug.toolBarLocation": "hidden",
        "debug.focusWindowOnBreak": false,
        "debug.showInlineBreakpointCandidates": false,
        "debug.showBreakpointsInOverviewRuler": false,
        "debug.javascript.autoAttachFilter": "disabled",
        "debug.javascript.codelens.npmScripts": "never",
    
        //Format
        "prettier.enable": true,
        "prettier.tabWidth": 4,
        "prettier.semi": true, // ; в конце ;
        "prettier.useTabs": false, // tab вместо пробела
        "prettier.quoteProps": "as-needed", // Используйте одинарные кавычки вместо двойных кавычек.
        "prettier.singleQuote": true, // Используйте одинарные кавычки вместо двойных кавычек.
        "prettier.jsxSingleQuote": true, // Используйте одинарные кавычки вместо двойных
        "prettier.arrowParens": "always", // убирает необязательные ()
    
        "eslint.enable": true,
        // Настройки форматирования javascript
        "eslint.format.enable": false, // запретить или разрешить форматирование
        "eslint.run": "onType", // запускать проверку кода по мере печати кода
        "eslint.probe": [
            // какие файлы нужно проверять
            "javascript", "javascriptreact", "typescript", "typescriptreact"
        ],
        
        "[javascript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[html]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[javascriptreact]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescriptreact]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[json]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[jsonc]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[css]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[php]": {
            // нужно установить phpfmt - PHP formatter
            "editor.formatOnSave": false,
            "editor.defaultFormatter": "kokororin.vscode-phpfmt"
        },
        //Terminal
        "terminal.integrated.fontSize": 15,
        "terminal.integrated.tabs.enabled": false, // выключить табы
    
        // files
        "files.defaultLanguage": "plaintext", // язык по умолчанию для новых файлов
        "files.autoSave": "afterDelay",
    
        //Other
        //Зафиксируйте все изменения, когда нет поэтапных изменений.
        "git.enableSmartCommit": true,
        "diffEditor.ignoreTrimWhitespace": false,
        "liveServer.settings.donotShowInfoMsg": true,
        "security.workspace.trust.untrustedFiles": "open", // доверять не доверенным файлам
        "html.completion.attributeDefaultValue": "singlequotes",
        "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    
        //Breadcrumbs
        "breadcrumbs.icons": false,
        "breadcrumbs.showKeys": false,
        "breadcrumbs.showFiles": false,
        "breadcrumbs.symbolPath": "off",
        "breadcrumbs.showArrays": false,
        "breadcrumbs.showEvents": false,
        "breadcrumbs.showFields": false,
        "breadcrumbs.showClasses": false,
        "breadcrumbs.showMethods": false,
        "breadcrumbs.showBooleans": false,
        "breadcrumbs.showFunctions": false,
        "breadcrumbs.showConstants": false,
        "breadcrumbs.showEnumMembers": false,
        "breadcrumbs.showConstructors": false,
    
        //JS & TS
        "typescript.suggest.completeFunctionCalls": true,
        "javascript.suggest.completeFunctionCalls": true,
        // отключить проверку синтаксиса при использовании конструкций, отличных от ES6?
        "javascript.validate.enable": false,
        "javascript.suggestionActions.enabled": false,
        "typescript.suggestionActions.enabled": false,
        "javascript.updateImportsOnFileMove.enabled": "always", // автоматическое изменение импортов при переименовании файла
        "typescript.updateImportsOnFileMove.enabled": "always", // убрать ебаные подсказки
        "typescript.enablePromptUseWorkspaceTsdk": true,
    
        // Jest
        "jest.enableCodeLens": true, // убрать ебаные подсказки
        "jest.debugMode": true,
        "jest.jestCommandLine": "jest --config ./config/jest/jest.config.ts",
        "git.confirmSync": false,
    
        "emmet.includeLanguages": {
            "javascript": "javascriptreact",
            "vue-html": "html",
            "razor": "html",
            "plaintext": "pug"
        },
    
        "typescript.suggest.completeJSDocs": true
    }
    
}
let v2 = {
    //Window
    'window.zoomLevel': 0,
    'window.openFilesInNewWindow': 'off', //открывать файлы в новом окне

    'html.format.wrapLineLength': 140,

    //Main editor settings
    'editor.tabSize': 4,
    'editor.wordWrap': 'on', // если строка не помещается на экран, перенсти на следующюю строку
    'editor.folding': true, // свернуть часть кода нажав на стрелку слева
    'editor.insertSpaces': false, // вставлять пробелы
    'editor.smoothScrolling': true,
    'editor.minimap.enabled': true, // мини карта
    'editor.detectIndentation': true, // идентификация файла, какое расширение ему поставить
    'editor.suggestSelection': 'first', // порядок подставки свойств, сначала свойства потом сниппеты
    'editor.scrollBeyondLastLine': true, //Определяет, будет ли редактор прокручиваться за пределы последней строки.
    'editor.snippetSuggestions': 'bottom', // подсказки появляются снизу
    'editor.multiCursorModifier': 'ctrlCmd', // мульти курсор на ctrl
    'editor.renderControlCharacters': false, //Определяет, должен ли редактор отображать управляющие символы.
    //Управляет выделением символов, которые можно спутать с основными символами ASCII, кроме тех, которые являются общими для текущего пользовательского языкового стандарта.
    'editor.unicodeHighlight.ambiguousCharacters': false,
    'editor.unicodeHighlight.nonBasicASCII': false,
    'editor.formatOnSave': true, // автоформатирование при сохранении;
    'editor.formatOnPaste': true, //  автоформатирование при вставке;

    //Appearance
    'editor.cursorBlinking': 'smooth', // вид анимации курсора
    'editor.bracketPairColorization.enabled': true, // вложенные скобки будут разного цвета
    'editor.glyphMargin': false,

    //Font
    'editor.fontSize': 16, // размер шрифта
    'editor.fontLigatures': true, // у стрелочной функции стрелка сольётся в символ стрелки
    // "editor.fontFamily": "Pragmata Pro",
    'editor.fontFamily': 'JetBrains Mono, IBM Plex Mono, monospace',

    //Explorer
    'explorer.confirmDelete': false, // подтверждение удаления
    'explorer.compactFolders': false, // если папка пустая, она отображается как папка в папке
    'explorer.confirmDragAndDrop': false, // подтверждение действия драгендропа

    //Workbench
    'workbench.activityBar.visible': true,
    'workbench.colorTheme': 'Omni',
    //Разрешить уменьшение размера вкладок, когда доступного места недостаточно для отображения всех вкладок одновременно.
    'workbench.editor.tabSizing': 'shrink',
    'workbench.editor.enablePreview': false, // всегда открывать в новой вкладке
    'workbench.iconTheme': 'vscode-icons', // тема иконок
    'workbench.startupEditor': 'newUntitledFile', // при загрузке редактора будет открываться новый пустой файл

    //Debug	отключить его нахер и то это ещё не всё
    'debug.toolBarLocation': 'hidden',
    'debug.focusWindowOnBreak': false,
    'debug.showInlineBreakpointCandidates': false,
    'debug.showBreakpointsInOverviewRuler': false,
    'debug.javascript.autoAttachFilter': 'disabled',
    'debug.javascript.codelens.npmScripts': 'never',

    //Format
    'prettier.tabWidth': 4,
    'prettier.semi': true, // ; в конце ;
    'prettier.useTabs': false, // tab вместо пробела
    'prettier.singleQuote': true, // Используйте одинарные кавычки вместо двойных кавычек.
    'prettier.jsxSingleQuote': true, // Используйте одинарные кавычки вместо двойных
    'prettier.arrowParens': 'avoid', // убирает необязательные ()

    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    '[html]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[javascript]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[typescript]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[javascriptreact]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[typescriptreact]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[json]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[jsonc]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[css]': {
        'editor.defaultFormatter': 'esbenp.prettier-vscode',
    },
    '[php]': {
        // нужно установить phpfmt - PHP formatter
        'editor.formatOnSave': true,
        'editor.defaultFormatter': 'kokororin.vscode-phpfmt',
    },
    //Terminal
    'terminal.integrated.fontSize': 15,
    'terminal.integrated.tabs.enabled': false, // выключить табы

    // files
    'files.defaultLanguage': 'plaintext', // язык по умолчанию для новых файлов
    'files.autoSave': 'afterDelay',

    //Other
    //Зафиксируйте все изменения, когда нет поэтапных изменений.
    'git.enableSmartCommit': true,
    'diffEditor.ignoreTrimWhitespace': false,
    'liveServer.settings.donotShowInfoMsg': true,
    'security.workspace.trust.untrustedFiles': 'open', // доверять не доверенным файлам
    'html.completion.attributeDefaultValue': 'singlequotes',
    'vsintellicode.modify.editor.suggestSelection':
        'automaticallyOverrodeDefaultValue',

    //Breadcrumbs
    'breadcrumbs.icons': false,
    'breadcrumbs.showKeys': false,
    'breadcrumbs.showFiles': false,
    'breadcrumbs.symbolPath': 'off',
    'breadcrumbs.showArrays': false,
    'breadcrumbs.showEvents': false,
    'breadcrumbs.showFields': false,
    'breadcrumbs.showClasses': false,
    'breadcrumbs.showMethods': false,
    'breadcrumbs.showBooleans': false,
    'breadcrumbs.showFunctions': false,
    'breadcrumbs.showConstants': false,
    'breadcrumbs.showEnumMembers': false,
    'breadcrumbs.showConstructors': false,

    //JS & TS
    'javascript.suggestionActions.enabled': false,
    'typescript.suggestionActions.enabled': false,
    'javascript.updateImportsOnFileMove.enabled': 'always', // автоматическое изменение импортов при переименовании файла
    'typescript.updateImportsOnFileMove.enabled': 'always', // убрать ебаные подсказки
    'typescript.enablePromptUseWorkspaceTsdk': true,

    // Jest
    'jest.enableCodeLens': true, // убрать ебаные подсказки
    'jest.debugMode': true,
    'jest.jestCommandLine': 'jest --config ./config/jest/jest.config.ts',
    'git.confirmSync': false,

    'emmet.includeLanguages': {
        javascript: 'javascriptreact',
        'vue-html': 'html',
        razor: 'html',
        plaintext: 'pug',
    },
};


let q = {
	//Window
	"window.zoomLevel": 0,
	"window.openFilesInNewWindow": "off", //открывать файлы в новом окне

	//Main editor settings
	"editor.tabSize": 2,
	"editor.wordWrap": "on", // если строка не помещается на экран, перенсти на следующюю строку
	"editor.folding": true, // свернуть часть кода нажав на стрелку слева
	"editor.insertSpaces": false, // вставлять пробелы
	"editor.smoothScrolling": true,
	"editor.minimap.enabled": true, // мини карта
	"editor.detectIndentation": true, // идентификация файла, какое расширение ему поставить
	"editor.suggestSelection": "first", // порядок подставки свойств, сначала свойства потом сниппеты
	"editor.scrollBeyondLastLine": true, //Определяет, будет ли редактор прокручиваться за пределы последней строки.
	"editor.snippetSuggestions": "bottom", // подсказки появляются снизу
	"editor.multiCursorModifier": "ctrlCmd", // мульти курсор на ctrl
	"editor.renderControlCharacters": false, //Определяет, должен ли редактор отображать управляющие символы.
	//Управляет выделением символов, которые можно спутать с основными символами ASCII, кроме тех, которые являются общими для текущего пользовательского языкового стандарта.
	"editor.unicodeHighlight.ambiguousCharacters": false,
	"editor.unicodeHighlight.nonBasicASCII": false,

	//Appearance
	"editor.cursorBlinking": "expand", // вид анимации курсора
	"editor.bracketPairColorization.enabled": true, // вложенные скобки будут разного цвета
	"editor.glyphMargin": false,

	//Font
	"editor.fontSize": 16, // размер шрифта
	"editor.fontLigatures": true, // у стрелочной функции стрелка сольётся в символ стрелки
	// "editor.fontFamily": "Pragmata Pro",
	"editor.fontFamily": "JetBrains Mono, IBM Plex Mono, monospace",

	//Explorer
	"explorer.confirmDelete": false, // подтверждение удаления
	"explorer.compactFolders": false, // если папка пустая, она отображается как папка в папке
	"explorer.confirmDragAndDrop": false, // подтверждение действия драгендропа

	//Emmet
	"emmet.triggerExpansionOnTab": true, // emmet срабатывает при табе
	"emmet.showExpandedAbbreviation": "never", // не было подсказок

	//Workbench
	"workbench.activityBar.visible": true,
	"workbench.colorTheme": "Omni",
	//Разрешить уменьшение размера вкладок, когда доступного места недостаточно для отображения всех вкладок одновременно.
	"workbench.editor.tabSizing": "shrink",
	"workbench.iconTheme": "vscode-icons", // тема иконок
	"workbench.startupEditor": "newUntitledFile", // при загрузке редактора будет открываться новый пустой файл

	//Debug	отключить его нахер и то это не всё
	"debug.toolBarLocation": "hidden",
	"debug.focusWindowOnBreak": false,
	"debug.showInlineBreakpointCandidates": false,
	"debug.showBreakpointsInOverviewRuler": false,
	"debug.javascript.autoAttachFilter": "disabled",
	"debug.javascript.codelens.npmScripts": "never",

	//Format
	"prettier.tabWidth": 4,
	"prettier.semi": true, // ; в конце
	"prettier.useTabs": true, // tab вместо пробела
	"editor.formatOnSave": true, // автоформатирование при сохранении;
	"editor.formatOnPaste": true, //  автоформатирование при вставке;
	"prettier.singleQuote": true, // Используйте одинарные кавычки вместо двойных кавычек.
	"prettier.jsxSingleQuote": true, // Используйте одинарные кавычки вместо двойных
	"prettier.arrowParens": "avoid", // убирает необязательные ()
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[css]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[php]": {
		// нужно установить phpfmt - PHP formatter
		"editor.formatOnSave": true,
		"editor.defaultFormatter": "kokororin.vscode-phpfmt"
	},
	//Terminal
	"terminal.integrated.fontSize": 15,
	"terminal.integrated.tabs.enabled": false, // выключить табы

	// files
	"files.defaultLanguage": "plaintext", // язык по умолчанию для новых файлов
	"files.autoSave": "afterDelay",

	//Other
	//Зафиксируйте все изменения, когда нет поэтапных изменений.
	"git.enableSmartCommit": true,
	"diffEditor.ignoreTrimWhitespace": false,
	"liveServer.settings.donotShowInfoMsg": true,
	"security.workspace.trust.untrustedFiles": "open", // доверять не доверенным файлам
	"html.completion.attributeDefaultValue": "singlequotes",
	"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",

	//Breadcrumbs
	"breadcrumbs.icons": false,
	"breadcrumbs.showKeys": false,
	"breadcrumbs.showFiles": false,
	"breadcrumbs.symbolPath": "off",
	"breadcrumbs.showArrays": false,
	"breadcrumbs.showEvents": false,
	"breadcrumbs.showFields": false,
	"breadcrumbs.showClasses": false,
	"breadcrumbs.showMethods": false,
	"breadcrumbs.showBooleans": false,
	"breadcrumbs.showFunctions": false,
	"breadcrumbs.showConstants": false,
	"breadcrumbs.showEnumMembers": false,
	"breadcrumbs.showConstructors": false,

	//JS & TS
	"javascript.suggestionActions.enabled": false,
	"typescript.suggestionActions.enabled": false,
	"javascript.updateImportsOnFileMove.enabled": "always", // автоматическое изменение импортов при переименовании файла
	"typescript.updateImportsOnFileMove.enabled": "always",

	"jest.enableCodeLens": false // убрать ебаные подсказки
};
