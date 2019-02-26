const { Toolkit } = require('actions-toolkit')
const path = require('path')
const tools = new Toolkit()

// TODO: Detect if script exists and fails gracefully if it doesn't
const scriptPath = tools.arguments._[0] || `/.github/actions/${tools.context.event}.js`
// Remove the file from the list of arguments
if (tools.arguments._[0]) tools.arguments._.shift()
require(path.join(tools.workspace, scriptPath))(tools)
