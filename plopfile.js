const types = {
  prompts: {
    input: 'input'
  },
  actions: {
    add: 'add',
    append: 'append'
  }
}
// both regex are designed to inset after all the imports/export lines inside the file, instead of before
// use second version to insert before existing lines
const regex = {
  import: /\/\/ PLOP_INJECT_IMPORT[\s\S](import \S*? from '\S*?';[\s\S])*(import \S*? from '\S*?';){1}|\/\/ PLOP_INJECT_IMPORT/gm,
  import2: /\/\/ PLOP_INJECT_IMPORT/,
  export: /export {[\s\S]([\s\S]*?,[\s\S])*([\s\S]*?,){1}|export {/gm,
  export2: /export {/
};

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: types.prompts.input,
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: types.actions.add,
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile:
          'plop-templates/Component/Component.js.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          'plop-templates/Component/Component.test.js.hbs',
      },
      {
        type: types.actions.add,
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile:
          'plop-templates/Component/Component.module.scss.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/components/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: types.actions.append,
        path: 'src/components/index.js',
        pattern: regex.import,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: types.actions.append,
        path: 'src/components/index.js',
        pattern: regex.export,
        template: `\t{{pascalCase name}},`,
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: types.prompts.input,
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: types.actions.add,
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile:
          'plop-templates/Page/Page.js.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile:
          'plop-templates/Page/Page.test.js.hbs',
      },
      {
        type: types.actions.add,
        path:
          'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile:
          'plop-templates/Page/Page.module.css.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/pages/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Page/index.js.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/pages/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: types.actions.append,
        path: 'src/pages/index.js',
        pattern: regex.import,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: types.actions.append,
        path: 'src/pages/index.js',
        pattern: regex.export,
        template: `\t{{pascalCase name}},`,
      },
    ],
  })

  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: types.prompts.input,
        name: 'name',
        message: 'What is your service name?',
      },
    ],
    actions: [
      {
        type: types.actions.add,
        path: 'src/services/{{camelCase name}}.js',
        templateFile: 'plop-templates/service.js.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/services/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: types.actions.append,
        path: 'src/services/index.js',
        pattern: regex.import,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: types.actions.append,
        path: 'src/services/index.js',
        pattern: regex.export,
        template: `\t{{camelCase name}},`,
      }
    ],
  })

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: types.prompts.input,
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: types.actions.add,
        path: 'src/hooks/{{camelCase name}}.js',
        templateFile: 'plop-templates/hook.js.hbs',
      },
      {
        type: types.actions.add,
        path: 'src/hooks/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: types.actions.append,
        path: 'src/hooks/index.js',
        pattern: regex.import,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: types.actions.append,
        path: 'src/hooks/index.js',
        pattern: regex.export,
        template: `\t{{camelCase name}},`,
      }
    ],
  })
}