const tp={
    ver: (version,date)=>`<b>${version}</b> <br/><small>(on ${date})</small>`,
    screen:(product, imgSrc)=>`<span data-toggle="tooltip" class="tippy_content_img" data-tippy-content="<div class='tippy-img-container'>
    <img src='${imgSrc}'>
    <h6>${product} Main Interface</h6>
    </div>">🖵 Screenshot ▪️</span>`

}


export default {
    products: [{name:"Studio 3T", site:"https://studio3t.com"}, 
               {name:"NoSQLBooster", site:"https://nosqlbooster.com"}, 
               {name: "Compass", site:"https://www.mongodb.com/products/compass"}, 
               {name: "Navicat", site:"https://navicat.com/en/products/navicat-for-mongodb"},
               {name: "NoSQLManager", site:"https://www.mongodbmanager.com"}], //dbkoda, queryassist
    groups:
        [    
            {
                name: "Basic and Connection",//
                rows: [
                               //studio3t                       //nosqlbooster                compass                       navicat                       sqlmanager
                    ["Release", tp.ver("2024.3.1","2024-06-10"),tp.ver("9.0.0","2024-06-29"), tp.ver("1.43.3","2024-07-01"),tp.ver("17.0.8","2024-06-19"),tp.ver("7.3.3","2024-06-29")],
                    [{name:"Cost",title:`- Free means that a free version with reduced features is available.\n- Price refers to the price of the most expensive full-featured version.`}, "free-$699/year", "free-$239/license", "free", "$349/license",  "free-$180/license"], 
                    ["Main Interface", 
                         tp.screen("Studio 3T", "https://studio3t.com/wp-content/uploads/2022/03/Studio_3T_Screenshot_Win_Dark.png"),
                         tp.screen("NoSQLBooster", "https://nosqlbooster.com/s3/img/v7-main-interface-dark.png"),
                         tp.screen("Compass", "https://www.mongodb.com/docs/compass/current/images/compass/instance-view.png"),
                         tp.screen("Navicat", "https://www.navicat.com/images/product_screenshot/Screenshot_Navicat_16_MongoDB_Windows_01_Mainscreen.png"),
                         tp.screen("NoSQLManager", "https://www.mongodbmanager.com/img/manager.png"),
                        ],
                    ["Operating system", "Windows, Mac, Linux", "Windows, Mac, Linux", "Windows, Mac, Linux", "Windows, Mac, Linux", "Windows"],
                    ["MongoDB versions", "3.0+", "3.6+", "3.6+", "3.0+", "3.6+"],
                    ["MongoDB Shell", "bundled mongosh/mongo shell", "embedded mongosh", "bundled mongosh", "embedded mongo shell", "embedded mongo shell"],
                    // ["Development language", "Java", "Node.js+Electron", "Node.js+Electron", "C++",  ".Net"],
                    ["Secure connection: SSH/SSL", true, true, true, true, true], 
                    ["Connection via Proxy", true, false, true, false, false], 
                    ["In-Use Encryption Connection", false, true, true, false, false], 
                    [{name: "Readonly mode", title:`The read-only mode of the connection is strictly restricted to read operations, removing all write and delete functions.`},
                         {title:"==Note== Only restrict to add, delete and modify operations of Studio3T UI, but you can still use shell commands to modify data, such as `db.collection.update()`"},
                          {title:`Not only restrict UI operations, but also [work on MongoDB commands](https://www.nosqlbooster.com/features#Read-onlyStatus-Lock) with NoSQLBooster.`, interactive:true},
                          {title:"==Note== Only restrict to add, delete and modify operations of Compass UI", interactive:true},
                          false, false
                    ],
                    ["Password authentication", true, true, true, true, true],
                    ["x.509 certificate authentication", true, true, true, true, true],
                    ["Kerberos and LDAP authentication", true, true, true, true, true],
                    ["AWS IAM authentication", true, true, true, true, true],
                ]
            },
            {
                name: "Management of MongoDB Objects",
                rows: [
                    ["Databases", true, true, true, true ,true],
                    ["Collections/Views", true, true, true, true, true],
                    ["Indices", true, true, true, true, true],
                    ["Users and roles", true, true, true, true, true],
                    [{name:"GridFS",  title:`In MongoDB, use GridFS for storing files larger than 16 MB. The support for GridFS here means that you can upload, download and preview files via UI`}, true, true, false, true, true],
                    // [{name:"Map Reduce", title:"Starting in MongoDB 5.0, map-reduce is deprecated"}, true, false, false, true, true],
                ]
            },
            {
                name: "Data Presentation",
                rows: [
                    ["Tree, Table and JSON View", true, true, true ,true, true],
                    ["In-Place Editing (Table and Tree Views)", true, true, true, true, true],
                    ["Ability to edit results of db.collection.find()",true, true, false, false, true],
                    ["Ability to edit results of db.collection.aggregate()",false, true, false, false, false],
                    ["Text, Binary viewer/editor", true, true, false, true, true],
                    ["Image viewer", false, true, false, true, false],
                    [{name: "Geo JSON Viewer", title:"Visualize the MongoDB GeoJSON Objects. The GeoJSON is a format for encoding geographical data structures, using the JavaScript Object Notation (JSON)."}, false, {
                        title:`[Click here to view](https://www.nosqlbooster.com/dataViewer#VisualizingGeoJSONObjects) NoSQLBooster's visualizing GeoJSON objects feature.`, interactive:true
                    }, false, false, false],
                    ["Filtering and sorting of query results", true, true, true, true, true],
                    ["Grouping and projection of query results", false, {title:`[Click here to view](https://www.nosqlbooster.com/dataViewer#One-clickGrouping/Filtering) NoSQLBooster's one-click grouping/filtering feature.`, interactive:true}, false, false, false],
                ]
            },
            {
                name: "Script Processing",
                rows: [
                    [{name:"Code editor for developers", title:`A developer-oriented code editor should have at least the following features.
- Syntax highlighting
- Display line numbers
- Bracket matching 
- Automatic indent and outdent
- Highlight matching parentheses
- Code beautifier
- Code folding`},
                        false, true, false, true, false],

                    [{name:"Script debugging and breakpoints", title:"Ability to debug client-side MongoDB scripts, set breakpoints, and step through"}, false, true, false, false, false],
                    [{name:"Auto-Completion for MongoDB script", title:
`IntelliSense for MongoDB should have the following autocomplete features
- Javascript methods, properties, variables and keywords 
- ***MongoDB operators, collection names and field names***
- User-defined code snippets`}, true, true, false, true, false],
                    //["Advanced Code completion", false, true, false, true, true],

                    ["Code snippets and completion", false, true, false, true, true],
                    [{ name: "On-the-fly error detection",
                       title:`The language service continues to analyze your code in the background. As you type, errors are reported in the editor, and line of code with a possible issue is marked in the editor`},
                       false, true, false, true, false],
                    ["Query history and bookmarks", true, true, true, true, true],

                    [{name:"Query MongoDB with SQL",
                      title:`This feature is suitable for developers who know SQL but want to learn MongoDB. 
MongoDB server does not provide native SQL query capabilities. 
The implementation of each product that claims to support SQL query varies greatly. 

MongoDB is a document database that is very different from a relational database, and some complex queries are difficult to achieve through the current SQL query capabilities of these products.`},
                       {title:`[Click here to view](https://studio3t.com/knowledge-base/articles/sql-query) Studio3T's SQL query features.`, interactive:true}, 
                       
                       {title:`[Click here to view](https://nosqlbooster.com/runSQLQuery) NoSQLBooster's SQL query features. NoSQLBooster's SQL allows mixed use of SQL and aggregate method, which improves the usefulness of its SQL query.`, interactive:true}, false, false, 
                       {title:`[Click here to view](https://www.mongodbmanager.com/sqleditor) NoSQLManager's SQL query features.`, interactive:true}],


                    [{ name:"Fluent find/aggregate API", 
                    title:`Support for the Mongoose-like smooth query builder API, which allows you to build queries using link syntax instead of specifying JSON objects.
\`\`\`js
//instead of writing:
db.user.find({age:{$gte:18,$lte:65}},
        {name:1,age:1,_id:0})
   .sort({age:-1, name:1});

//we can write:
db.user
  .where('age').gte(18).lte(65)
  .select('name age -_id')
  .sort("-age name");    
\`\`\`

==NOTE==
This is an extension of MongoDB script, Native mongo shell does not support these extension methods.
`}, 
                     false, 
                     {title:`[Click here to view](https://nosqlbooster.com/FluentQueryAPI) NoSQLBooster's Fluent Query Builder API.`, interactive:true}

                     ,false, false,false],
                    [{name:"Using Node/NPM modules in the script", 
                    title:`This feature allows you use Node.js build-in global objects and modules (console, util,fs,path ...) and NPM packages in your script. It can greatly expand the capabilities of mongo script.
                    
==NOTE==
This is an extension of MongoDB script, Native mongo shell does not support these extension methods.`},
                    false, { title:`[Click here to view](https://nosqlbooster.com/useNodeModule) NoSQLBooster's using Node/NPM modules page.`, interactive:true}, false, false, false],

                    [{name:"Visual find builder" ,title:'You can think of the find builder as a tool for building `db.collection.find()` queries visually.'}, true, true, true, true, true],
                    [{name: "Visual aggregate Builder", title:
`You can think of the aggregate builder as a tool for building \`db.collection.aggregate([pipeline])\` visually. It provides the ability to create aggregations in a simple and real-time manner.`}, 
{title:`[Click here to view](https://studio3t.com/knowledge-base/articles/build-mongodb-aggregation-queries/) Studio3T's aggregation editor.`, interactive:true}, 
{title: `NoSQLBooster does not provide such a visual aggregation builder, but its script extensions support the ability to write aggregation pipeline using a [chainable aggregate API](https://nosqlbooster.com/FluentQueryAPI#AggregationPipeline).`, supported:false, interactive:true}, 
{title:`[Click here to view](https://www.mongodb.com/docs/compass/upcoming/aggregation-pipeline-builder/) Compass's aggregation pipeline builder.`, interactive:true}, 
true, false],

                    // ["Copy & Paste Database", true, true],
                    // ["Copy & Paste Collections", true, true],

                    // [{name: "Switch RS Member within the editor", title:""}, false, true, false, false, false],
                    [{name: "Visual Explain (query performance)", title:`Visual Explain transforms \`explain command\` output into a hierarchical view of the query plan, which is easier to read and understand, allowing for query tuning to enhance query and resolve performance issues.`}, true, true, true, false, false],
                    

                    // ["Test Data Generator", false, true],
                    // ["Schema Explorer", true, true],
                    // ["Schema Visualization", true, true],
                    // ["Schema Documentation", true, true],
                    // ["Data Comparison", true, false],
                    // ["Data Synchronization", true, false],
                    // ["Task Schedule", true, true],
                    // ["Data Masking", true, false],
                    // ["Reschema Tool", true, true],
                    // ["Read-only Status-Lock", true, true],
                    [{name:"Export query to specific language", title:`This feature exports MongoDB find/aggregate pipeline to one of the supported languages. It helps you format and export queries created in this tool for use in your application.`},
                     {title:"Supported Languages: Java, C#, Python, Nodejs, PHP, Ruby"}, 
                     {title:"Supported Languages: Java, C#, Python, Nodejs, PHP, Ruby, Golang"}, 
                     {title:"Supported Languages: Java, C#, Python, Nodejs, PHP, Ruby, Golang, Rust"}, false, false ],
                ]
            },


            {
                name: "Monitoring Tools",
                rows: [
                    [{name: "Real-Time server performance monitor", title: `GUI for [mongostat](https://www.mongodb.com/docs/database-tools/mongostat) which provides a quick overview of the status of a currently running mongod or mongos instance.`, interactive:true}, true, true, true, false, true],
                    [{name: "Mongo top (track read and write)", title:`GUI for [mongotop](https://www.mongodb.com/docs/database-tools/mongotop) which provides a method to track the amount of time a MongoDB instance mongod spends reading and writing data.`, interactive:true}, false, true, true, false, true],

                    [{name:"View/Kill in-progress operations", title:`GUI for \`db.currentOp()\` command, the [db.currentOp()](https://www.mongodb.com/docs/manual/reference/method/db.currentOp/) command reports in-progress operations for the mongod instance.`, interactive:true}, true, true, false, true, true],
                    [{name:"Database Profiler", title:`GUI for \`system.profile\` collection, the [database profiler](https://www.mongodb.com/docs/manual/tutorial/manage-the-database-profiler/) collects detailed information about Database Commands executed against a running mongod instance.`, interactive:true}, true, true, false, true, true],

                    [{name: "Log viewer: parse MongoDB log file into JSON", title:`This tool will parse MongoDB log file and output general information about its contents, including timestamp, severity, component, context, and command-specific messages.`}, false, 
                           {title:`[Click here to view](https://nosqlbooster.com/monitoring#MongoDBLogParser) NoSQLBooster's log parser`, interactive:true}, false, false, false],
                    [{name:"Watch for Changes (MongoDB change stream)", title:`You can open a [change stream](https://www.mongodb.com/docs/manual/changeStreams) again a collection, database, or deployment and watch changes.`}, false,  true , false, false,false],
                    ["Server/Replica/Sharding Status", true, true, false, false, true],
                ]
            },
            {
                name: "Import/Export and Advanced Data Manipulations",
                rows: [
                    ["Export data to plain text file formats: JSON, CSV", true, true, true, true, true],
                    ["Export data to MS Excel", true, true, false, true, true],
                    ["Export to SQL file", true, true, false, false, false],
                    ["Import data from JSON and CSV", true, true, true, true, true],

                    ["Migrate from SQL to MongoDB", {title:`Supports Oracle, MS SQL Server, MySQL, PostgreSQL, Sybase, and IBM DB2 .`}, {title:"Supports MS SQL Server, MySQL and PostgreSQL."}, false, {title:"Supports Oracle, MS SQL Server, MySQL, PostgreSQL, Sybase, IBM DB2 and more"}, {title:"Supports MS SQL Server and MySQL."}],
                    ["Migrate from MongoDB to SQL",  {title:`Supports Oracle, MS SQL Server, MySQL, PostgreSQL, Sybase, and IBM DB2 .`}, false, false,  {title:"Supports Oracle, MS SQL Server, MySQL, PostgreSQL, Sybase, IBM DB2 and more"},false],

//                     [{name:"Scripted imports and exports", title:
// `Fine code-level control of the import and export process for complex data conversion.`}, false, true, false, false, false],

                    ["Backup/restore - mongodump/mongorestore", true, true, true,true, true],

                    ["Copy/paste collections across servers/databases", true, true, false, true, true],
                    ["Copy/paste databases across servers", true, true, false, true, true],

                    ["Fake Data Generator", false, true, false, {title:`[Click here to view](https://www.navicat.com/en/company/aboutus/blog/1821-generating-test-data-in-navicat-16) Navicat's data generation feature`, interactive:true} , false],

                ]
            },

            {
                name: "Schema Analysis, Design and Optimization",
                rows: [
                    ["Schema Explorer", true, true, true, true, true],
                    [{name: "Schema Documentation", title:"Generate schema documents that can be exported to files in different formats"}, true, true, true, false, false],
                   
                    [{name:"Data Compare & Sync",
                      title:`You can select entire MongoDB databases, specific collections, or particular query results to compare. Run the comparison, and you’ll see the differences side-by-side, and all results can be edited and/or synchronized in place.`}, 
                      {title:`[Click here to view](https://studio3t.com/knowledge-base/articles/data-compare-and-sync/) Studio3T's data compare & sync feature`}, false, false, true, 
                      false],
                    [{name:"Reschema (schema optimization)", title:"GUI for transforming the MongoDB collection schema."}, {title:`[Click here to view](https://studio3t.com/mongodb-tools/reschema) Studio3T's reschema feature`, interactive:true}, true, false, false, false],
                    ["Schema Validator", true, true, true, true, true],
                ]
            },
            {
                name: "Automation",
                rows: [
                    [{name:"Tasks (import/export, dump/restore, execute script)", title:`Tasks lets you configure and save frequently-run imports, exports, backups, restores or script jobs so you can later run them easily.`}, true, true, false, true, false],
                    [{name:"Task Schedule", title:`A job scheduler that executes tasks at pre-defined times or after specified time intervals.`}, 
                     {title:`==Note== Studio3T must be running at the scheduled time in order for any scheduled task to run.`}, true, false, true, false], //Studio 3T must be running at the scheduled time in order for any scheduled task to run.
                    ["Email notifications for tasks", false, true, false, true, false],
                    ["Command line interface for tasks", false, true, false, true, false],
                ]
            },
            {
                name: "Other Useful Features",
                rows: [
                    ["Auto update", true, true, true, true, true],
                    ["Dark theme", true, true, true, true, true],
                    ["Multi-Language support", false, false, false, true, false],
                    ["Customize keyboard shortcuts", true, true, false, false, false],
                    [{name:"Collaboration", title:"Store your files in cloud to start collaboration with your team members."}, {title:"[Click here to view](https://studio3t.com/team-sharing/) Studio 3T's Team Sharing features.", interactive:true}, false, false, {title:"[Click here to view](https://www.navicat.com/en/products#navicat-collaboration) Navicat's collaboration features.", interactive:true}, false],
                    ["AI Helper", {title:"[Click here to view](https://studio3t.com/ai-helper-the-first-natural-language-query-tool-for-mongodb/) Studio 3T's AI helper feature.", interactive:true}, false, false, false, false],
                    ["BI tool", false, false, false, {title:"[Click here to view](https://www.navicat.com/images/product_screenshot/Screenshot_Navicat_17_Windows_BI.png) Navicat's BI tool.", interactive:true}, false],
                    ["Modeling tool", false, false, false, {title:"[Click here to view](https://www.navicat.com/images/product_screenshot/Screenshot_Navicat_17_Premium_Windows_Modeling.png) Navicat's modeling tool.", interactive:true}, false],
                    [{name:"Save/restore session", title:"The session restore feature saves information about all open tabs before closing the app and automatically opens previously open tabs so that users can resume work where they left off."}, true, true, false, false, false],
                    ["In-App tutorials", false, {title:"[Click here to view](https://nosqlbooster.com/features#LearnMongoDBwithFreeInteractiveSamples) a screenshot of an interactive sample of NoSQLBooster.", interactive:true}, false, false, false],
                    // [{name: "History log", title:"History logs provide a history of operations and can help diagnose errors."}, false, true, true, true, false],
                ]
            },


        ]
}
