export default function (plop) {
  plop.setHelper('tagWithoutPrefix', tag => tag.replace(/^nu-/, ''));

  plop.setHelper('tagToTitle', tag => {
    const withoutPrefix = plop.getHelper('tagWithoutPrefix');
    const titleCase = plop.getHelper('titleCase');
    return titleCase(withoutPrefix(tag).replace(/-/g, ' '));
  });

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name? (e.g. nu-button)',
        validate: value => {
          // Start with nu- and include only a-z + dashes
          if (!/^nu-[a-z-+]+/.test(value)) {
            return false;
          }

          // No double dashes or ending dash
          if (value.includes('--') || value.endsWith('-')) {
            return false;
          }

          return true;
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.ts',
        templateFile: 'templates/component/define.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.component.ts',
        templateFile: 'templates/component/component.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.styles.ts',
        templateFile: 'templates/component/styles.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.test.ts',
        templateFile: 'templates/component/tests.hbs'
      },
      {
        type: 'add',
        path: '../../docs/pages/components/{{ tagWithoutPrefix tag }}.md',
        templateFile: 'templates/component/docs.hbs'
      },
      {
        type: 'modify',
        path: '../../src/nebula.ts',
        pattern: /\/\* plop:component \*\//,
        template: `export { default as {{ properCase tag }} } from './components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.js';\n/* plop:component */`
      }
    ]
  });
}
