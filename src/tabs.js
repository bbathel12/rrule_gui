const jquery = require("jquery");
const jqueryui = require("jqueryui");
require("jquery-ui-css");

console.log("hello world");
jquery("#tabs").tabs({
    'active':0,
});
