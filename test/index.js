'use strict';

// Load modules

const Lab = require('@hapi/lab');
const Code = require('@hapi/code');

// Test shortcuts

const { describe, it, before } = exports.lab = Lab.script();
const { expect } = Code;

describe('Module', () => {

    let module;
    before(async () => {

        module = await import('../index.js');
    });

    it('hellos to world.', () => {

        expect(module).to.equal({ hello: 'world' });
    });
});
