'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.init_gruntplugin_sample = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(8);

    var actual = grunt.file.read('reports/carsales-report');
    var expected = grunt.file.read('test/expected/carsales-report');
    test.equal(actual, expected, 'Should produce a default report without DOM element for carsales');

    actual = grunt.file.read('reports/carsales-report-dom');
    expected = grunt.file.read('test/expected/carsales-report-dom');
    test.equal(actual, expected, 'Should produce a default report with DOM element for carsales');

    actual = grunt.file.read('reports/carsales-report.json');
    expected = grunt.file.read('test/expected/carsales-report.json');
    test.equal(actual, expected, 'Should produce JSON report without DOM element for carsales');

    actual = grunt.file.read('reports/carsales-report-dom.json');
    expected = grunt.file.read('test/expected/carsales-report-dom.json');
    test.equal(actual, expected, 'Should produce JSON report with DOM element for carsales');

    actual = grunt.file.read('reports/test-report');
    expected = grunt.file.read('test/expected/test-report');
    test.equal(actual, expected, 'Should produce a default report without DOM element for a test file');

    actual = grunt.file.read('reports/test-report-dom');
    expected = grunt.file.read('test/expected/test-report-dom');
    test.equal(actual, expected, 'Should produce a default report with DOM element for a test file');

    actual = grunt.file.read('reports/test-report.json');
    expected = grunt.file.read('test/expected/test-report.json');
    test.equal(actual, expected, 'Should produce JSON report without DOM element for a test file');

    actual = grunt.file.read('reports/test-report-dom.json');
    expected = grunt.file.read('test/expected/test-report-dom.json');
    test.equal(actual, expected, 'Should produce JSON report with DOM element for a test file');

    test.done();
  }
};
