
var db = require('../config/db'),
    $ResourceSchema = require('../schemas/$resource'),
    $Resource = db.model('$Resource', $ResourceSchema);

module.exports = $Resource;