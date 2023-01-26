module.exports = function (plop) {
    plop.setGenerator('atoms', {
        description: `Create a new design system components`,
        prompts: [
            {
                type: `input`,
                name: `name`,
                message: `What is the name of your design system component?`,
            },
            {
                type: `input`,
                name: `scope`,
                message: `What is the scope of your design system component?`,
            },
        ],
        actions: [
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/{{pascalCase name}}.tsx`,
                templateFile: `plop-templates/Component.tsx.hbs`,
            },
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
                templateFile: `plop-templates/Component.module.scss.hbs`,
            },
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/index.ts`,
                templateFile: `plop-templates/index.ts.hbs`,
            },
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
                templateFile: `plop-templates/Component.stories.tsx.hbs`,
            },
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/{{pascalCase name}}.stories.mdx`,
                templateFile: `plop-templates/Component.stories.mdx.hbs`,
            },
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/{{pascalCase name}}.spec.tsx`,
                templateFile: `plop-templates/Component.spec.tsx.hbs`,
            },
            {
                type: `add`,
                path: `packages/{{scope}}/src/{{pascalCase name}}/{{pascalCase name}}.interface.ts`,
                templateFile: `plop-templates/Component.interface.ts.hbs`,
            },
        ],
    });
};