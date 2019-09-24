# ![LOGO](logo.png) PI Web API 2017 Swagger Spec **flow**ground Connector

## Description

A generated **flow**ground connector for the PI Web API 2017 Swagger Spec API (version 1.9.0.266).

Generated from: https://devdata.osisoft.com/piwebapi<br/>
Generated at: 2019-09-24T15:09:34+00:00

## API Description

Swagger Spec file that describes PI Web API<br/>

## Authorization

This API does not require authorization.

## Actions

### Get top level links for this PI System Web API instance.

*Tags:* `Home`

### Retrieve an Analysis by path.
> This method returns an Analysis based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `Analysis`

#### Input Parameters
* `path` - _required_ - The path to the Analysis.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an Analysis.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis to delete.<br/>

### Retrieve an Analysis.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an Analysis.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis to update.<br/>

### Get an Analysis' categories.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get the security information of the specified security item associated with the Analysis for a specified user.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the analysis based on the specified criteria. By default, all security entries for this analysis are returned.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the analysis.

*Tags:* `Analysis`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis, where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the analysis.

*Tags:* `Analysis`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the analysis, where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the analysis with the specified name.

*Tags:* `Analysis`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the analysis.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the analysis.

*Tags:* `Analysis`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the analysis, where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an analysis category by path.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `path` - _required_ - The path to the target analysis category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an analysis category.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis category to delete.<br/>

### Retrieve an analysis category.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an analysis category by replacing items in its definition.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis category to update.<br/>

### Get the security information of the specified security item associated with the analysis category for a specified user.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis category for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the analysis category based on the specified criteria. By default, all security entries for this analysis category are returned.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis category.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the analysis category.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis category, where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the analysis category.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the analysis category, where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the analysis category with the specified name.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the analysis category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the analysis category.

*Tags:* `AnalysisCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the analysis category, where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an Analysis Rule Plug-in by path.
> This method returns an Analysis Rule Plug-in based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `AnalysisRulePlugIn`

#### Input Parameters
* `path` - _required_ - The path to the Analysis Rule Plug-in.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve an Analysis Rule Plug-in.

*Tags:* `AnalysisRulePlugIn`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis Rule Plug-in.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve an Analysis Rule by path.
> This method returns an Analysis Rule based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `AnalysisRule`

#### Input Parameters
* `path` - _required_ - The path to the Analysis Rule.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an Analysis Rule.

*Tags:* `AnalysisRule`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis Rule.<br/>

### Retrieve an Analysis Rule.

*Tags:* `AnalysisRule`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis Rule.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an Analysis Rule by replacing items in its definition.

*Tags:* `AnalysisRule`

#### Input Parameters
* `webId` - _required_ - The ID of the Analysis Rule.<br/>

### Get the child Analysis Rules of the Analysis Rule.

*Tags:* `AnalysisRule`

#### Input Parameters
* `webId` - _required_ - The ID of the parent Analysis Rule.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding Analysis Rules. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include Analysis Rules nested further than the immediate children of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>

### Create a new Analysis Rule as a child of an existing Analysis Rule.

*Tags:* `AnalysisRule`

#### Input Parameters
* `webId` - _required_ - The ID of the parent Analysis Rule, on which to create the child Analysis Rule.<br/>

### Retrieve an analysis template by path.
> This method returns an analysis template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `path` - _required_ - The path to the analysis template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an Analysis template based upon a specified Analysis.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `analysisWebId` - _required_ - The ID of the Analysis, on which the template is created.<br/>
* `name` - _optional_ - The name for the created template, which must be unique within the database's AnalysisTemplate collection. If the name ends with an asterisk (*), then a unique name will be generated based on the supplied name. The default is the specified Analysis' name suffixed with an asterisk (*).<br/>

### Delete an analysis template.
> Deleting an analysis template will delete any anlysis which was created from it, unless the analysis is tied to a notification.<br/>

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template to update.<br/>

### Retrieve an analysis template.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an analysis template by replacing items in its definition.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template to update.<br/>

### Get an analysis template's categories.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get the security information of the specified security item associated with the analysis template for a specified user.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the analysis template based on the specified criteria. By default, all security entries for this analysis template are returned.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the analysis template.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the analysis template, where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the analysis template.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the analysis template, where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the analysis template with the specified name.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the analysis template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the analysis template.

*Tags:* `AnalysisTemplate`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the analysis template, where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an Asset Database by path.
> This method returns an asset database based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `path` - _required_ - The path to the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>

### Retrieve an Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an asset database by replacing items in its definition.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>

### Retrieve analyses based on the specified conditions.
> Users can search for the analyses based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the analyses that match the default search.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database to search for the analyses.<br/>
* `field` - _required_ - Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `query` - _optional_ - The query string used for finding analyses. The default is null.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>

### Retrieve analysis categories for a given Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an analysis category at the Asset Database root.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the analysis category.<br/>

### Retrieve analysis templates based on the specified criteria. By default, all analysis templates in the specified Asset Database are returned.
> Users can search for the analysis templates based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the templates that match the default search.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database to search.<br/>
* `field` - _required_ - Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `query` - _optional_ - The query string used for finding objects. The default is no query string.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>

### Create an analysis template at the Asset Database root.
> Analyses that are based on an analysis template will inherit characteristics defined in the template.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the analysis template.<br/>

### Retrieve attribute categories for a given Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an attribute category at the Asset Database root.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the attribute category.<br/>

### Retrieves a list of element attributes matching the specified filters from the specified asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database to use as the root of the search.<br/>
* `attributeCategory` - _optional_ - Specify that returned attributes must have this category. The default is no filter.<br/>
* `attributeDescriptionFilter` - _optional_ - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `attributeNameFilter` - _optional_ - The attribute name filter string used for finding objects. The default is no filter.<br/>
* `attributeType` - _optional_ - Specify that returned attributes' value type must be this value type. The default is no filter.<br/>
* `elementCategory` - _optional_ - Specify that the owner of the returned attributes must have this category. The default is no filter.<br/>
* `elementDescriptionFilter` - _optional_ - The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `elementNameFilter` - _optional_ - The element name filter string used for finding objects. The default is no filter.<br/>
* `elementTemplate` - _optional_ - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.<br/>
* `elementType` - _optional_ - Specify that the element of the returned attributes must have this AFElementType. The default is no filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned (the page size). The default is 1000.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>

### Retrieve element categories for a given Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an element category at the Asset Database root.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the element category.<br/>

### Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified asset database.
> Users can search for the elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database to use as the root of the search.<br/>
* `categoryName` - _optional_ - Specify that returned elements must have this category. The default is no category filter.<br/>
* `descriptionFilter` - _optional_ - Specify that returned elements must have this description. The default is no description filter.<br/>
* `elementType` - _optional_ - Specify that returned elements must have this type. The default type is 'Any'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding objects. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.<br/>

### Create a child element.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database on which to create the element.<br/>

### Retrieve element templates based on the specified criteria. Only templates of instance type "Element" and "EventFrame" are returned. By default, all element and event frame templates in the specified Asset Database are returned.
> Users can search for the element and event frame template based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the templates that match the default search.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database to search.<br/>
* `field` - _required_ - Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `query` - _optional_ - The query string used for finding objects. The default is no query string.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>

### Create a template at the Asset Database root. Specify InstanceType of "Element" or "EventFrame" to create element or event frame template respectively. Only these two types of templates can be created.
> Elements and event frames that are based on an element template will inherit characteristics defined in the template.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the element template.<br/>

### Retrieve enumeration sets for given asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an enumeration set at the Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the enumeration set.<br/>

### Retrieves a list of event frame attributes matching the specified filters from the specified asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database to use as the root of the search.<br/>
* `attributeCategory` - _optional_ - Specify that returned attributes must have this category. The default is no filter.<br/>
* `attributeDescriptionFilter` - _optional_ - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `attributeNameFilter` - _optional_ - The attribute name filter string used for finding objects. The default is no filter.<br/>
* `attributeType` - _optional_ - Specify that returned attributes' value type must be this value type. The default is no filter.<br/>
* `endTime` - _optional_ - A string representing the latest ending time for the event frames to be matched. The endTime must be greater than or equal to the startTime. The default is '*'.<br/>
* `eventFrameCategory` - _optional_ - Specify that the owner of the returned attributes must have this category. The default is no filter.<br/>
* `eventFrameDescriptionFilter` - _optional_ - The event frame description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `eventFrameNameFilter` - _optional_ - The event frame name filter string used for finding objects. The default is no filter.<br/>
* `eventFrameTemplate` - _optional_ - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned (the page size). The default is 1000.<br/>
* `referencedElementNameFilter` - _optional_ - The name query string which must match the name of a referenced element. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.<br/>
* `searchMode` - _optional_ - Determines how the startTime and endTime parameters are treated when searching for event frames.     The default is 'Overlapped'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `startTime` - _optional_ - A string representing the earliest starting time for the event frames to be matched. startTime must be less than or equal to the endTime. The default is '*-8h'.<br/>

### Retrieve event frames based on the specified conditions. By default, returns all children of the specified root resource with a start time in the past 8 hours.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database to use as the root of the search.<br/>
* `canBeAcknowledged` - _optional_ - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.<br/>
* `categoryName` - _optional_ - Specify that returned event frames must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `isAcknowledged` - _optional_ - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding event frames. The default is no filter.<br/>
* `referencedElementNameFilter` - _optional_ - The name query string which must match the name of a referenced element. The default is no filter.<br/>
* `referencedElementTemplateName` - _optional_ - Specify that returned event frames must have an element in the event frame's referenced elements collection that derives from the template. Specify this parameter by name.<br/>
* `searchFullHierarchy` - _optional_ - Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.<br/>
* `searchMode` - _optional_ - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `severity` - _optional_ - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `startTime` - _optional_ - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.<br/>
* `templateName` - _optional_ - Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.<br/>

### Create an event frame.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database on which to create the event frame.<br/>

### Export the asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `endTime` - _optional_ - The latest ending time for AFEventFrame, AFTransfer, and AFCase objects that may be part of the export. The default is '*'.<br/>
* `exportMode` - _optional_ - Indicates the type of export to perform. The default is 'StrongReferences'. Multiple export modes may be specified by using multiple instances of exportMode.<br/>
* `startTime` - _optional_ - The earliest starting time for AFEventFrame, AFTransfer, and AFCase objects that may be part of the export. The default is '*-30d'.<br/>

### Import an asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database.<br/>
* `importMode` - _optional_ - Indicates the type of import to perform. The default is 'AllowCreate | AllowUpdate | AutoCheckIn'. Multiple import modes may be specified by using multiple instances of importMode.<br/>

### Remove a reference to an existing element from the specified database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database which the referenced element will be removed from.<br/>
* `referencedElementWebId` - _required_ - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.<br/>

### Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements at the root level of the asset database.
> Users can search for the referenced elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.<br/>

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the resource to use as the root of the search.<br/>
* `categoryName` - _optional_ - Specify that returned elements must have this category. The default is no category filter.<br/>
* `descriptionFilter` - _optional_ - Specify that returned elements must have this description. The default is no description filter.<br/>
* `elementType` - _optional_ - Specify that returned elements must have this type. The default type is 'Any'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding objects. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.<br/>

### Add a reference to an existing element to the specified database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database which the referenced element will be added to.<br/>
* `referencedElementWebId` - _required_ - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.<br/>
* `referenceType` - _optional_ - The name of the reference type between the parent and the referenced element. This must be a "strong" reference type. The default is "parent-child".<br/>

### Get the security information of the specified security item associated with the asset database for a specified user.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database for the security to be checked.<br/>
* `securityItem` - _required_ - The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only 'Default' security item of the security information will be returned.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries of the specified security item associated with the asset database based on the specified criteria. By default, all security entries for this asset database are returned.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the asset database where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries to be created. If the parameter is not specified, security entries of the 'Default' security item will be created.<br/>

### Delete a security entry owned by the asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the asset database where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the 'Default' security item will be deleted.<br/>

### Retrieve the security entry of the specified security item associated with the asset database with the specified name.

*Tags:* `AssetDatabase`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the asset database.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the asset database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the asset database where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the 'Default' security item will be updated.<br/>

### Retrieve table categories for a given Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a table category on the Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the table category.<br/>

### Retrieve tables for given Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a table on the Asset Database.

*Tags:* `AssetDatabase`

#### Input Parameters
* `webId` - _required_ - The ID of the database in which to create the table.<br/>

### Retrieve a list of all Asset Servers known to this service.

*Tags:* `AssetServer`

#### Input Parameters
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve an Asset Server by name.
> This method returns an asset server based on the name associated with it. Users should primarily search with the WebID when available.<br/>

*Tags:* `AssetServer`

#### Input Parameters
* `name` - _required_ - The name of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve an Asset Server by path.
> This method returns an asset server based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `AssetServer`

#### Input Parameters
* `path` - _required_ - The path to the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve an Asset Server.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a list of all Analysis Rule Plug-in's.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server, where the Analysis Rule Plug-in's are installed.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a list of all Asset Databases on the specified Asset Server.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an asset database.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server on which to create the database.<br/>

### Get the security information of the specified security item associated with the asset server for a specified user.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server for the security to be checked.<br/>
* `securityItem` - _required_ - The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only 'Default' security item of the security information will be returned.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries of the specified security item associated with the asset server based on the specified criteria. By default, all security entries for this asset server are returned.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the asset server.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries to be created. If the parameter is not specified, security entries of the 'Default' security item will be created.<br/>

### Delete a security entry owned by the asset server.

*Tags:* `AssetServer`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the asset server where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the 'Default' security item will be deleted.<br/>

### Retrieve the security entry of the specified security item associated with the asset server with the specified name.

*Tags:* `AssetServer`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the asset server.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the asset server.

*Tags:* `AssetServer`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the asset server where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>
* `securityItem` - _optional_ - The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the 'Default' security item will be updated.<br/>

### Retrieve security identities based on the specified criteria. By default, all security identities in the specified Asset Server are returned.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server to search.<br/>
* `field` - _optional_ - Specifies which of the object's properties are searched. The default is 'Name'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned. The default is 1000.<br/>
* `query` - _optional_ - The query string used for finding objects. The default is no query string.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>

### Create a security identity.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server on which to create the security identity.<br/>

### Retrieve security identities for a specific user.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `userIdentity` - _required_ - The user identity to search for.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve security mappings based on the specified criteria. By default, all security mappings in the specified Asset Server are returned.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server to search.<br/>
* `field` - _optional_ - Specifies which of the object's properties are searched. The default is 'Name'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned. The default is 1000.<br/>
* `query` - _optional_ - The query string used for finding objects. The default is no query string.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>

### Create a security mapping.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server on which to create the security mapping.<br/>

### Retrieve a list of all Time Rule Plug-in's.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the asset server, where the Time Rule Plug-in's are installed.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a list of all unit classes on the specified Asset Server.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a unit class in the specified Asset Server.

*Tags:* `AssetServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>

### Retrieve an attribute category by path.

*Tags:* `AttributeCategory`

#### Input Parameters
* `path` - _required_ - The path to the target attribute category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an attribute category.

*Tags:* `AttributeCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute category to delete.<br/>

### Retrieve an attribute category.

*Tags:* `AttributeCategory`

#### Input Parameters
* `webId` - _required_ - The id of the attribute category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an attribute category by replacing items in its definition.

*Tags:* `AttributeCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute category to update.<br/>

### Get the security information of the specified security item associated with the attribute category for a specified user.

*Tags:* `AttributeCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute category for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the attribute category based on the specified criteria. By default, all security entries for this attribute category are returned.

*Tags:* `AttributeCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute category.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the attribute category.

*Tags:* `AttributeCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute category where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the attribute category.

*Tags:* `AttributeCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the attribute category where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the attribute category with the specified name.

*Tags:* `AttributeCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the attribute category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the attribute category.

*Tags:* `AttributeCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the attribute category where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an attribute by path.
> This method returns an attribute based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `Attribute`

#### Input Parameters
* `path` - _required_ - The path to the attribute.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve multiple attributes by web id or path.

*Tags:* `Attribute`

#### Input Parameters
* `asParallel` - _optional_ - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.<br/>
* `includeMode` - _optional_ - The include mode for the return list. The default is 'All'.<br/>
* `path` - _optional_ - The path of an attribute. Multiple attributes may be specified with multiple instances of the parameter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `webId` - _optional_ - The ID of an attribute. Multiple attributes may be specified with multiple instances of the parameter.<br/>

### Delete an attribute.

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>

### Retrieve an attribute.

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an attribute by replacing items in its definition.
> If an attribute is based on a template, the user must make sure to update the attribute appropriately so that it does not conflict with the template's design. Once a template is applied to an attribute, it can not be changed.<br/>

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>

### Get the child attributes of the specified attribute.

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the parent attribute.<br/>
* `categoryName` - _optional_ - Specify that returned attributes must have this category. The default is no category filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned attributes must be members of this template. The default is no template filter.<br/>
* `valueType` - _optional_ - Specify that returned attributes' value type must be the given value type. The default is no value type filter.<br/>

### Create a new attribute as a child of the specified attribute.

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the parent attribute on which to create the attribute.<br/>

### Get an attribute's categories.

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create or update an attribute's DataReference configuration (Create/Update PI point for PI Point DataReference).

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>

### Get the attribute's value. This call is intended for use with attributes that have no data reference only. For attributes with a data reference, consult the documentation for Streams.

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Set the value of a configuration item attribute. For attributes with a data reference or non-configuration item attributes, consult the documentation for streams.
> Users must be aware of the value type that the attribute takes before changing the value. If a value entered by the user does not match the value type expressed in the attribute, it will not work or it will return an error. Users should also be careful of what the value type means, for instance, if a value type accepts strings and the user enters a number, the attribute will interpret it as a string of characters and not as the integer value that the user may have wanted.<br/>

*Tags:* `Attribute`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute.<br/>

### Retrieve an attribute template by path.
> This method returns an attribute template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `AttributeTemplate`

#### Input Parameters
* `path` - _required_ - The path to the attribute template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an attribute template.
> Deleting an attribute template will delete the attributes that were created based on the template<br/>

*Tags:* `AttributeTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute template.<br/>

### Retrieve an attribute template.

*Tags:* `AttributeTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an existing attribute template by replacing items in its definition.
> Updating an attribute template will propagate changes to the attributes that were created based on the template<br/>

*Tags:* `AttributeTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute template.<br/>

### Retrieve an attribute template's child attribute templates.

*Tags:* `AttributeTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an attribute template as a child of another attribute template.

*Tags:* `AttributeTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the parent attribute template on which to create the attribute template.<br/>

### Get an attribute template's categories.

*Tags:* `AttributeTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the attribute template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve all attribute traits of the specified category/categories.

*Tags:* `AttributeTrait`

#### Input Parameters
* `category` - _required_ - The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is "all", then all attribute traits of all categories will be returned.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve an attribute trait.

*Tags:* `AttributeTrait`

#### Input Parameters
* `name` - _required_ - The name or abbreviation of the attribute trait.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Execute a batch of requests against the service. As shown in the Sample Request, the input is a dictionary with IDs as keys and request objects as values. Each request object specifies the HTTP method and the resource and, optionally, the content and a list of parent IDs. The list of parent IDs specifies which other requests must complete before the given request will be executed. The example first creates an element, then gets the element by the response's Location header, then creates an attribute for the element. Note that the resource can be an absolute URL or a JsonPath that references the response to the parent request. The batch's response is a dictionary uses keys corresponding those provided in the request, with response objects containing a status code, response headers, and the response body. A request can alternatively specify a request template in place of a resource. In this case, a single JsonPath may select multiple tokens, and a separate subrequest will be made from the template for each token. The responses of these subrequests will returned as the content of a single outer response.

*Tags:* `Batch`

### Returns results of evaluating the expression over the time range from the start time to the end time at a defined interval.

*Tags:* `Calculation`

#### Input Parameters
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `expression` - _optional_ - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.<br/>
* `sampleInterval` - _optional_ - A time span specifies how often the filter expression is evaluated when computing the summary for an interval.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `webId` - _optional_ - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.<br/>

### Returns the result of evaluating the expression at each point in time over the time range from the start time to the end time where a recorded value exists for a member of the expression.

*Tags:* `Calculation`

#### Input Parameters
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `expression` - _optional_ - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `webId` - _optional_ - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.<br/>

### Returns the result of evaluating the expression over the time range from the start time to the end time. The time range is first divided into a number of summary intervals. Then the calculation is performed for the specified summaries over each interval.

*Tags:* `Calculation`

#### Input Parameters
* `calculationBasis` - _optional_ - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `expression` - _optional_ - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.<br/>
* `sampleInterval` - _optional_ - A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.<br/>
* `sampleType` - _optional_ - A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `summaryDuration` - _optional_ - The duration of each summary interval.<br/>
* `summaryType` - _optional_ - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.<br/>
* `timeType` - _optional_ - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.<br/>
* `webId` - _optional_ - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.<br/>

### Returns the result of evaluating the expression at the specified timestamps.

*Tags:* `Calculation`

#### Input Parameters
* `expression` - _optional_ - A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `time` - _optional_ - A list of timestamps at which to calculate the expression.<br/>
* `webId` - _optional_ - The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null.<br/>

### Retrieves a list of currently running channel instances.

*Tags:* `Channel`

### Retrieve a list of Data Servers known to this service.
> This method returns a list of all available known Data Servers that the user can connect to. Even though a server may be returned in the list, the user may not have permission to access it.<br/>

*Tags:* `DataServer`

#### Input Parameters
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a Data Server by name.
> This method returns a data server based on the name. Users should primarily search with the WebID when available.<br/>

*Tags:* `DataServer`

#### Input Parameters
* `name` - _required_ - The name of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a Data Server by path.
> This method returns a data server based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `DataServer`

#### Input Parameters
* `path` - _required_ - The path to the server. Note that the path supplied to this method must be of the form '\\servername'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a Data Server.

*Tags:* `DataServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve enumeration sets for given Data Server.

*Tags:* `DataServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an enumeration set on the Data Server.

*Tags:* `DataServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server on which to create the enumeration set.<br/>

### Retrieve a list of points on a specified Data Server.
> Users can search for the data servers based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the data servers that match the default search.<br/>

*Tags:* `DataServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - A query string for filtering by point name. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is '0'.<br/>

### Create a point in the specified Data Server.

*Tags:* `DataServer`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>

### Retrieve an element category by path.

*Tags:* `ElementCategory`

#### Input Parameters
* `path` - _required_ - The path to the target element category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an element category.

*Tags:* `ElementCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the element category to delete.<br/>

### Retrieve an element category.

*Tags:* `ElementCategory`

#### Input Parameters
* `webId` - _required_ - The id of the element category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an element category by replacing items in its definition.

*Tags:* `ElementCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the element category to update.<br/>

### Get the security information of the specified security item associated with the element category for a specified user.

*Tags:* `ElementCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the element category for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the element category based on the specified criteria. By default, all security entries for this element category are returned.

*Tags:* `ElementCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the element category.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the element category.

*Tags:* `ElementCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the element category where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the element category.

*Tags:* `ElementCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the element category where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the element category with the specified name.

*Tags:* `ElementCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the element category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the element category.

*Tags:* `ElementCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the element category where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an element by path.
> This method returns an element based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `Element`

#### Input Parameters
* `path` - _required_ - The path to the element.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve multiple elements by web id or path.

*Tags:* `Element`

#### Input Parameters
* `asParallel` - _optional_ - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.<br/>
* `includeMode` - _optional_ - The include mode for the return list. The default is 'All'.<br/>
* `path` - _optional_ - The path of an element. Multiple elements may be specified with multiple instances of the parameter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `webId` - _optional_ - The ID of an element. Multiple elements may be specified with multiple instances of the parameter.<br/>

### Create a link for a "Search Elements By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.

*Tags:* `Element`

### Execute a "Search Elements By Attribute Value" operation.

*Tags:* `Element`

#### Input Parameters
* `searchId` - _required_ - The encoded search Id of the "Search Elements By Attribute Value" operation.<br/>
* `categoryName` - _optional_ - Specify that the owner of the returned attributes must have this category. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `descriptionFilter` - _optional_ - The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned. The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding objects. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>

### Delete an element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>

### Retrieve an element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an element by replacing items in its definition.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>

### Retrieve analyses based on the specified conditions.
> Users can search for the analyses based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the analyses that match the default search.<br/>

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element, which is the Target of the analyses.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>

### Create an Analysis.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element on which to create the Analysis.<br/>

### Get the attributes of the specified element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>
* `categoryName` - _optional_ - Specify that returned attributes must have this category. The default is no category filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned attributes must be members of this template. The default is no template filter.<br/>
* `valueType` - _optional_ - Specify that returned attributes' value type must be the given value type. The default is no value type filter.<br/>

### Create a new attribute of the specified element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element on which to create the attribute.<br/>

### Get an element's categories.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>
* `includeChildElements` - _optional_ - If true, includes the child elements of the specified element.<br/>

### Retrieves a list of element attributes matching the specified filters from the specified element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element to use as the root of the search.<br/>
* `attributeCategory` - _optional_ - Specify that returned attributes must have this category. The default is no filter.<br/>
* `attributeDescriptionFilter` - _optional_ - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `attributeNameFilter` - _optional_ - The attribute name filter string used for finding objects. The default is no filter.<br/>
* `attributeType` - _optional_ - Specify that returned attributes' value type must be this value type. The default is no filter.<br/>
* `elementCategory` - _optional_ - Specify that the owner of the returned attributes must have this category. The default is no filter.<br/>
* `elementDescriptionFilter` - _optional_ - The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `elementNameFilter` - _optional_ - The element name filter string used for finding objects. The default is no filter.<br/>
* `elementTemplate` - _optional_ - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.<br/>
* `elementType` - _optional_ - Specify that the element of the returned attributes must have this AFElementType. The default is no filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned (the page size). The default is 1000.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>

### Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified element.
> Users can search for the elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.<br/>

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element to use as the root of the search.<br/>
* `categoryName` - _optional_ - Specify that returned elements must have this category. The default is no category filter.<br/>
* `descriptionFilter` - _optional_ - Specify that returned elements must have this description. The default is no description filter.<br/>
* `elementType` - _optional_ - Specify that returned elements must have this type. The default type is 'Any'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding objects. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.<br/>

### Create a child element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the parent element on which to create the element.<br/>

### Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element with a start time in the past 8 hours.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element whose related event frames are sought.<br/>
* `canBeAcknowledged` - _optional_ - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.<br/>
* `categoryName` - _optional_ - Specify that returned event frames must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `isAcknowledged` - _optional_ - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding event frames. The default is no filter.<br/>
* `searchMode` - _optional_ - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `severity` - _optional_ - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `startTime` - _optional_ - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.<br/>
* `templateName` - _optional_ - Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.<br/>

### Remove a reference to an existing element from the child elements collection.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element which the referenced element will be removed from.<br/>
* `referencedElementWebId` - _required_ - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.<br/>

### Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements of the current resource.
> Users can search for the referenced elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.<br/>

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the resource to use as the root of the search.<br/>
* `categoryName` - _optional_ - Specify that returned elements must have this category. The default is no category filter.<br/>
* `descriptionFilter` - _optional_ - Specify that returned elements must have this description. The default is no description filter.<br/>
* `elementType` - _optional_ - Specify that returned elements must have this type. The default type is 'Any'.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding objects. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned elements must have this template or a template derived from this template. The default is no template filter.<br/>

### Add a reference to an existing element to the child elements collection.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element which the referenced element will be added to.<br/>
* `referencedElementWebId` - _required_ - The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.<br/>
* `referenceType` - _optional_ - The name of the reference type between the parent and the referenced element. The default is "parent-child".<br/>

### Get the security information of the specified security item associated with the element for a specified user.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the element.

*Tags:* `Element`

#### Input Parameters
* `webId` - _required_ - The ID of the element where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the element.

*Tags:* `Element`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the element where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the element with the specified name.

*Tags:* `Element`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the element.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the element.

*Tags:* `Element`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the element where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an element template by path.
> This method returns an element template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `ElementTemplate`

#### Input Parameters
* `path` - _required_ - The path to the element template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an element template.
> Deleting an element template will delete all associated templated data from elements which were created from it.<br/>

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template to update.<br/>

### Retrieve an element template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an element template by replacing items in its definition.
> Updating the InstanceType property of an element template will not affect any elements that have already been created from this template; it will only affect any future elements created from this template. All other changes will be propagated to elements based on this template.<br/>

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template to update.<br/>

### Get analysis templates for an element template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get child attribute templates for an element template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showInherited` - _optional_ - Specifies if the result should include attribute templates inherited from base element templates. The default is 'false'.<br/>

### Create an attribute template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template on which to create the attribute template.<br/>

### Get an element template's categories.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showInherited` - _optional_ - Specifies if the result should include categories inherited from base element templates. The default is 'false'.<br/>

### Get the security information of the specified security item associated with the element template for a specified user.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the element template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `webId` - _required_ - The ID of the element template where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the element template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the element template where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the element template with the specified name.

*Tags:* `ElementTemplate`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the element template.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the element template.

*Tags:* `ElementTemplate`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the element template where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an enumeration set by path.
> This method returns an enumeration set based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `EnumerationSet`

#### Input Parameters
* `path` - _required_ - The path to the target enumeration set.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an enumeration set.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set to delete.<br/>

### Retrieve an enumeration set.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an enumeration set by replacing items in its definition.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set to update.<br/>

### Retrieve an enumeration set's values.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an enumeration value for a enumeration set.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set on which to create the enumeration value.<br/>

### Get the security information of the specified security item associated with the enumeration set for a specified user.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the enumeration set based on the specified criteria. By default, all security entries for this enumeration set are returned.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the enumeration set.

*Tags:* `EnumerationSet`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration set where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the enumeration set.

*Tags:* `EnumerationSet`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the enumeration set where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the enumeration set with the specified name.

*Tags:* `EnumerationSet`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the enumeration set.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the enumeration set.

*Tags:* `EnumerationSet`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the enumeration set where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve an enumeration value by path.
> This method returns a enumeration value based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `EnumerationValue`

#### Input Parameters
* `path` - _required_ - The path to the target enumeration value.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete an enumeration value from an enumeration set.
> Deleting a value will remove it from the enumeration set along with any value references within the PI Web API system.<br/>

*Tags:* `EnumerationValue`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration value.<br/>

### Retrieve an enumeration value mapping

*Tags:* `EnumerationValue`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration value.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an enumeration value by replacing items in its definition.

*Tags:* `EnumerationValue`

#### Input Parameters
* `webId` - _required_ - The ID of the enumeration value to update.<br/>

### Retrieve an event frame by path.
> This method returns an event frame based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `EventFrame`

#### Input Parameters
* `path` - _required_ - The path to the event frame.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve multiple event frames by web ids or paths.

*Tags:* `EventFrame`

#### Input Parameters
* `asParallel` - _optional_ - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.<br/>
* `includeMode` - _optional_ - The include mode for the return list. The default is 'All'.<br/>
* `path` - _optional_ - The path of an event frame. Multiple event frames may be specified with multiple instances of the parameter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `webId` - _optional_ - The ID of an event frame. Multiple event frames may be specified with multiple instances of the parameter.<br/>

### Create a link for a "Search EventFrames By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root EventFrame. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the EventFrames. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.

*Tags:* `EventFrame`

### Execute a "Search EventFrames By Attribute Value" operation.

*Tags:* `EventFrame`

#### Input Parameters
* `searchId` - _required_ - The encoded search Id of the "Search EventFrames By Attribute Value" operation.<br/>
* `canBeAcknowledged` - _optional_ - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.<br/>
* `endTime` - _optional_ - The ending time for the search. endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*'.<br/>
* `isAcknowledged` - _optional_ - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding event frames. The default is no filter.<br/>
* `referencedElementNameFilter` - _optional_ - The name query string which must match the name of a referenced element. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.<br/>
* `searchMode` - _optional_ - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. The default is 'Overlapped'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `severity` - _optional_ - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `startTime` - _optional_ - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.<br/>

### Delete an event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame to delete.<br/>

### Retrieve an event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an event frame by replacing items in its definition.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame to update.<br/>

### Calls the EventFrame's Acknowledge method.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>

### Get an event frame's annotations.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the owner event frame.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create an annotation on an event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the owner event frame on which to create the annotation.<br/>

### Delete an annotation on an event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `id` - _required_ - The Annotation identifier of the annotation to be deleted.<br/>
* `webId` - _required_ - The ID of the owner event frame of the annotation to delete.<br/>

### Get a specific annotation on an event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `id` - _required_ - The Annotation identifier of the specific annotation.<br/>
* `webId` - _required_ - The ID of the owner event frame.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update an annotation on an event frame by replacing items in its definition.

*Tags:* `EventFrame`

#### Input Parameters
* `id` - _required_ - The Annotation identifier of the annotation to be updated.<br/>
* `webId` - _required_ - The ID of the owner event frame of the annotation to update.<br/>

### Get the attributes of the specified event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>
* `categoryName` - _optional_ - Specify that returned attributes must have this category. The default is no category filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `templateName` - _optional_ - Specify that returned attributes must be members of this template. The default is no template filter.<br/>
* `valueType` - _optional_ - Specify that returned attributes' value type must be the given value type. The default is no value type filter.<br/>

### Create a new attribute of the specified event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame on which to create the attribute.<br/>

### Calls the EventFrame's CaptureValues method.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>

### Get an event frame's categories.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Executes the create configuration function of the data references found within the attributes of the event frame, and optionally, its children.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>
* `includeChildElements` - _optional_ - If true, includes the child event frames of the specified event frame.<br/>

### Retrieves a list of event frame attributes matching the specified filters from the specified event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame to use as the root of the search.<br/>
* `attributeCategory` - _optional_ - Specify that returned attributes must have this category. The default is no filter.<br/>
* `attributeDescriptionFilter` - _optional_ - The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `attributeNameFilter` - _optional_ - The attribute name filter string used for finding objects. The default is no filter.<br/>
* `attributeType` - _optional_ - Specify that returned attributes' value type must be this value type. The default is no filter.<br/>
* `endTime` - _optional_ - A string representing the latest ending time for the event frames to be matched. The endTime must be greater than or equal to the startTime. The default is '*'.<br/>
* `eventFrameCategory` - _optional_ - Specify that the owner of the returned attributes must have this category. The default is no filter.<br/>
* `eventFrameDescriptionFilter` - _optional_ - The event frame description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.<br/>
* `eventFrameNameFilter` - _optional_ - The event frame name filter string used for finding objects. The default is no filter.<br/>
* `eventFrameTemplate` - _optional_ - Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned (the page size). The default is 1000.<br/>
* `referencedElementNameFilter` - _optional_ - The name query string which must match the name of a referenced element. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.<br/>
* `searchMode` - _optional_ - Determines how the startTime and endTime parameters are treated when searching for event frames.     The default is 'Overlapped'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `startTime` - _optional_ - A string representing the earliest starting time for the event frames to be matched. startTime must be less than or equal to the endTime. The default is '*-8h'.<br/>

### Retrieve event frames based on the specified conditions. By default, returns all children of the specified root event frame with a start time in the past 8 hours.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame to use as the root of the search.<br/>
* `canBeAcknowledged` - _optional_ - Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.<br/>
* `categoryName` - _optional_ - Specify that returned event frames must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `isAcknowledged` - _optional_ - Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.<br/>
* `maxCount` - _optional_ - The maximum number of objects to be returned per call (page size). The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for finding event frames. The default is no filter.<br/>
* `referencedElementNameFilter` - _optional_ - The name query string which must match the name of a referenced element. The default is no filter.<br/>
* `referencedElementTemplateName` - _optional_ - Specify that returned event frames must have an element in the event frame's referenced elements collection that derives from the template. Specify this parameter by name.<br/>
* `searchFullHierarchy` - _optional_ - Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.<br/>
* `searchMode` - _optional_ - Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `severity` - _optional_ - Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.<br/>
* `sortField` - _optional_ - The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.<br/>
* `startIndex` - _optional_ - The starting index (zero based) of the items to be returned. The default is 0.<br/>
* `startTime` - _optional_ - The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.<br/>
* `templateName` - _optional_ - Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.<br/>

### Create an event frame as a child of the specified event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the parent event frame on which to create the event frame.<br/>

### Retrieve the event frame's referenced elements.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame whose referenced elements should be retrieved.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get the security information of the specified security item associated with the event frame for a specified user.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the event frame based on the specified criteria. By default, all security entries for this event frame are returned.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `webId` - _required_ - The ID of the event frame where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the event frame where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the event frame with the specified name.

*Tags:* `EventFrame`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the event frame.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the event frame.

*Tags:* `EventFrame`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the event frame where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Get a point by path.
> This method returns a PI Point based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `Point`

#### Input Parameters
* `path` - _required_ - The path to the point.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve multiple points by web id or path.

*Tags:* `Point`

#### Input Parameters
* `asParallel` - _optional_ - Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested points. The default is 'false'.<br/>
* `includeMode` - _optional_ - The include mode for the return list. The default is 'All'.<br/>
* `path` - _optional_ - The path of a point. Multiple points may be specified with multiple instances of the parameter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `webId` - _optional_ - The ID of a point. Multiple points may be specified with multiple instances of the parameter.<br/>

### Delete a point.

*Tags:* `Point`

#### Input Parameters
* `webId` - _required_ - The ID of the point.<br/>

### Get a point.

*Tags:* `Point`

#### Input Parameters
* `webId` - _required_ - The ID of the point.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a point.

*Tags:* `Point`

#### Input Parameters
* `webId` - _required_ - The ID of the point.<br/>

### Get point attributes.

*Tags:* `Point`

#### Input Parameters
* `webId` - _required_ - The ID of the point.<br/>
* `name` - _optional_ - The name of a point attribute to be returned. Multiple attributes may be specified with multiple instances of the parameter.<br/>
* `nameFilter` - _optional_ - The filter to the names of the list of point attributes to be returned. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get a point attribute by name.

*Tags:* `Point`

#### Input Parameters
* `name` - _required_ - The name of the attribute.<br/>
* `webId` - _required_ - The ID of the point.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a security identity by path.
> This method returns a security identity based on the path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `SecurityIdentity`

#### Input Parameters
* `path` - _required_ - The path to the security identity.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a security identity.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `webId` - _required_ - The ID of the security identity.<br/>

### Retrieve a security identity.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `webId` - _required_ - The ID of the security identity.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security identity by replacing items in its definition.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `webId` - _required_ - The ID of the security identity.<br/>

### Get the security information of the specified security item associated with the security identity for a specified user.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `webId` - _required_ - The ID of the security identity for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the security identity based on the specified criteria. By default, all security entries for this security identity are returned.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `webId` - _required_ - The ID of the security identity.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entry associated with the security identity with the specified name.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the security identity.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get security mappings for the specified security identity.

*Tags:* `SecurityIdentity`

#### Input Parameters
* `webId` - _required_ - The ID of the security identity.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a security mapping by path.
> This method returns a security mapping based on the path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `SecurityMapping`

#### Input Parameters
* `path` - _required_ - The path to the security mapping.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a security mapping.

*Tags:* `SecurityMapping`

#### Input Parameters
* `webId` - _required_ - The ID of the security mapping.<br/>

### Retrieve a security mapping.

*Tags:* `SecurityMapping`

#### Input Parameters
* `webId` - _required_ - The ID of the security mapping.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security mapping by replacing items in its definition.

*Tags:* `SecurityMapping`

#### Input Parameters
* `webId` - _required_ - The ID of the security mapping.<br/>

### Get the security information of the specified security item associated with the security mapping for a specified user.

*Tags:* `SecurityMapping`

#### Input Parameters
* `webId` - _required_ - The ID of the security mapping for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the security mapping based on the specified criteria. By default, all security entries for this security mapping are returned.

*Tags:* `SecurityMapping`

#### Input Parameters
* `webId` - _required_ - The ID of the security mapping.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entry associated with the security mapping with the specified name.

*Tags:* `SecurityMapping`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the security mapping.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Opens a channel that will send messages about any value changes for the specified stream.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `includeInitialValues` - _optional_ - Specified if the channel should send a message with the current value of the stream after the connection is opened. The default is 'false'.<br/>

### Returns the end-of-stream value of the stream.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieves interpolated values over the specified time range at the specified sampling interval.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `interval` - _optional_ - The sampling interval, in AFTimeSpan format.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Retrieves interpolated values over the specified time range at the specified sampling interval.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `time` - _optional_ - The timestamp at which to retrieve an interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Retrieves values over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
> For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).<br/>

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `intervals` - _optional_ - The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns a list of compressed values for the requested time range from the source provider.
> Returned times are affected by the specified boundary type. If no values are found for the time range and conditions specified then the HTTP response will be success, with a body containing an empty array of Items. When specifying true for the includeFilteredValues parameter, consecutive filtered events are not returned. The first value that would be filtered out is returned with its time and the enumeration value "Filtered". The next value in the collection will be the next compressed value in the specified direction that passes the filter criteria - if any. When both boundaryType and a filterExpression are specified, the events returned for the boundary condition specified are passed through the filter. If the includeFilteredValues parameter is true, the boundary values will be reported at the proper timestamps with the enumeration value "Filtered" when the filter conditions are not met at the boundary time. If the includeFilteredValues parameter is false for this case, no event is returned for the boundary time.<br/>

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `boundaryType` - _optional_ - An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `maxCount` - _optional_ - The maximum number of values to be returned. The default is 1000.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Updates multiple values for the specified stream.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `bufferOption` - _optional_ - The desired AFBufferOption. The default is 'BufferIfPossible'.<br/>
* `updateOption` - _optional_ - The desired AFUpdateOption. The default is 'Replace'.<br/>

### Returns a single recorded value based on the passed time and retrieval mode from the stream.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `time` - _required_ - The timestamp at which the value is desired.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `retrievalMode` - _optional_ - An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Retrieves recorded values at the specified times.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `retrievalMode` - _optional_ - An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `time` - _optional_ - The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns a summary over the specified time range for the stream.
> Count is the only summary type supported on non-numeric streams. Requesting a summary for any other type will generate an error. Time-weighted totals are computed by integrating the rate tag values over the requested time range. If some of the data are bad in the time range, the calculated total is divided by the fraction of the time period for which there are good values. This approach is equivalent to assuming that during the period of bad data, the tag takes on the average values for the entire calculation time range. The PercentGood summary may be used to determine if the calculation results are suitable for the application's purposes. For time-weighted totals, if the time unit rate of the stream cannot be determined, then the value will be totaled assuming a unit of "per day" and no unit of measure will be assigned to the value. If the measured time component of the tag is not based on a day, the user of the data must convert the totalized value to the correct units.<br/>

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `calculationBasis` - _optional_ - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute.<br/>
* `sampleInterval` - _optional_ - When the sampleType is Interval, sampleInterval specifies how often the filter expression is evaluated when computing the summary for an interval.<br/>
* `sampleType` - _optional_ - Defines the evaluation of an expression over a time range. The default is 'ExpressionRecordedValues'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `summaryDuration` - _optional_ - The duration of each summary interval. If specified in hours, minutes, seconds, or milliseconds, the summary durations will be evenly spaced UTC time intervals. Longer interval types are interpreted using wall clock rules and are time zone dependent.<br/>
* `summaryType` - _optional_ - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.<br/>
* `timeType` - _optional_ - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns the value of the stream at the specified time. By default, this is usually the current value.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `desiredUnits` - _optional_ - The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `time` - _optional_ - An optional time. The default time context is determined from the owning object - for example, the time range of the event frame or transfer which holds this attribute. Otherwise, the implementation of the Data Reference determines the meaning of no context. For Points or simply configured PI Point Data References, this means the snapshot value of the PI Point on the Data Server.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Updates a value for the specified stream.

*Tags:* `Stream`

#### Input Parameters
* `webId` - _required_ - The ID of the stream.<br/>
* `bufferOption` - _optional_ - The desired AFBufferOption. The default is 'BufferIfPossible'.<br/>
* `updateOption` - _optional_ - The desired AFUpdateOption. The default is 'Replace'. This parameter is ignored if the attribute is a configuration item.<br/>

### Opens a channel that will send messages about any value changes for the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `includeInitialValues` - _optional_ - Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'.<br/>

### Returns End Of Stream values for attributes of the specified streams

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `interval` - _optional_ - The sampling interval, in AFTimeSpan format.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns interpolated values of the specified streams at the specified times.

*Tags:* `StreamSet`

#### Input Parameters
* `time` - _required_ - The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.<br/>
* `webId` - _required_ - The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns values of attributes for the specified streams over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
> For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).<br/>

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `intervals` - _optional_ - The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns recorded values of the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `boundaryType` - _optional_ - An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `maxCount` - _optional_ - The maximum number of values to be returned. The default is 1000.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Updates multiple values for the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `bufferOption` - _optional_ - The desired AFBufferOption. The default is 'BufferIfPossible'.<br/>
* `updateOption` - _optional_ - The desired AFUpdateOption. The default is 'Replace'.<br/>

### Returns recorded values based on the passed time and retrieval mode.

*Tags:* `StreamSet`

#### Input Parameters
* `time` - _required_ - The timestamp at which the values are desired.<br/>
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `retrievalMode` - _optional_ - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns recorded values of the specified streams at the specified times.

*Tags:* `StreamSet`

#### Input Parameters
* `time` - _required_ - The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.<br/>
* `webId` - _required_ - The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.<br/>
* `retrievalMode` - _optional_ - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns summary values of the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `calculationBasis` - _optional_ - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering.<br/>
* `sampleInterval` - _optional_ - A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.<br/>
* `sampleType` - _optional_ - A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d'.<br/>
* `summaryDuration` - _optional_ - The duration of each summary interval.<br/>
* `summaryType` - _optional_ - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.<br/>
* `timeType` - _optional_ - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns values of the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `time` - _optional_ - An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Updates a single value for the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `bufferOption` - _optional_ - The desired AFBufferOption. The default is 'BufferIfPossible'.<br/>
* `updateOption` - _optional_ - The desired AFUpdateOption. The default is 'Replace'.<br/>

### Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `includeInitialValues` - _optional_ - Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>

### Returns End of stream values of the attributes for an Element, Event Frame or Attribute

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>

### Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `interval` - _optional_ - The sampling interval, in AFTimeSpan format.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns interpolated values of attributes for an element, event frame or attribute at the specified times.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `time` - _required_ - The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns values of attributes for an element, event frame or attribute over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
> For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).<br/>

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `intervals` - _optional_ - The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns recorded values of the attributes for an element, event frame, or attribute.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `boundaryType` - _optional_ - An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.<br/>
* `includeFilteredValues` - _optional_ - Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.<br/>
* `maxCount` - _optional_ - The maximum number of values to be returned. The default is 1000.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Updates multiple values for the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.<br/>
* `bufferOption` - _optional_ - The desired AFBufferOption. The default is 'BufferIfPossible'.<br/>
* `updateOption` - _optional_ - The desired AFUpdateOption. The default is 'Replace'.<br/>

### Returns recorded values of the attributes for an element, event frame, or attribute.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `time` - _required_ - The timestamp at which the values are desired.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `retrievalMode` - _optional_ - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns recorded values of attributes for an element, event frame or attribute at the specified times.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `time` - _required_ - The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `retrievalMode` - _optional_ - An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `sortOrder` - _optional_ - The order that the returned collection is sorted. The default is 'Ascending'.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns summary values of the attributes for an element, event frame or attribute.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.<br/>
* `calculationBasis` - _optional_ - Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `endTime` - _optional_ - An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.<br/>
* `filterExpression` - _optional_ - A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `sampleInterval` - _optional_ - A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.<br/>
* `sampleType` - _optional_ - A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `startTime` - _optional_ - An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.<br/>
* `summaryDuration` - _optional_ - The duration of each summary interval.<br/>
* `summaryType` - _optional_ - Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `timeType` - _optional_ - Specifies how to calculate the timestamp for each interval. The default is 'Auto'.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.<br/>
* `categoryName` - _optional_ - Specify that included attributes must have this category. The default is no category filter.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering attributes. The default is no filter.<br/>
* `searchFullHierarchy` - _optional_ - Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>
* `showExcluded` - _optional_ - Specified if the search should include attributes with the Excluded property set. The default is 'false'.<br/>
* `showHidden` - _optional_ - Specified if the search should include attributes with the Hidden property set. The default is 'false'.<br/>
* `templateName` - _optional_ - Specify that included attributes must be members of this template. The default is no template filter.<br/>
* `time` - _optional_ - An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used.<br/>
* `timeZone` - _optional_ - The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.<br/>

### Updates a single value for the specified streams.

*Tags:* `StreamSet`

#### Input Parameters
* `webId` - _required_ - The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.<br/>
* `bufferOption` - _optional_ - The desired AFBufferOption. The default is 'BufferIfPossible'.<br/>
* `updateOption` - _optional_ - The desired AFUpdateOption. The default is 'Replace'.<br/>

### Get system links for this PI System Web API instance.

*Tags:* `System`

### Get AF cache instances currently in use by the system. These are caches from which user requests are serviced. The number of instances depends on the number of users connected to the service, the service's authentication method, and the cache instance configuration.

*Tags:* `System`

### Get the current system configuration.

*Tags:* `Configuration`

### Delete a configuration item.

*Tags:* `Configuration`

#### Input Parameters
* `key` - _required_ - The key of the configuration item to remove.<br/>

### Get the value of a configuration item.

*Tags:* `Configuration`

#### Input Parameters
* `key` - _required_ - The key of the configuration item.<br/>

### Get the system uptime, the system state and the number of cache instances for this PI System Web API instance.

*Tags:* `System`

### Get information about the Windows identity used to fulfill the request. This depends on the service's authentication method and the credentials passed by the client. The impersonation level of the Windows identity is included.

*Tags:* `System`

### Get the current versions of the PI Web API instance and all external plugins.

*Tags:* `System`

### Retrieve a table category by path.
> This method returns a Table Category based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `TableCategory`

#### Input Parameters
* `path` - _required_ - The path to the target table category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a table category.

*Tags:* `TableCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the table category to delete.<br/>

### Retrieve a table category.

*Tags:* `TableCategory`

#### Input Parameters
* `webId` - _required_ - The id of the table category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a table category by replacing items in its definition.

*Tags:* `TableCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the table category to update.<br/>

### Get the security information of the specified security item associated with the table category for a specified user.

*Tags:* `TableCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the table category for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the table category based on the specified criteria. By default, all security entries for this table category are returned.

*Tags:* `TableCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the table category.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the table category.

*Tags:* `TableCategory`

#### Input Parameters
* `webId` - _required_ - The ID of the table category where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the table category.

*Tags:* `TableCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the table category where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the table category with the specified name.

*Tags:* `TableCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the table category.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the table category.

*Tags:* `TableCategory`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the table category where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve a table by path.

*Tags:* `Table`

#### Input Parameters
* `path` - _required_ - The path to the table.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a table.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table to delete.<br/>

### Retrieve a table.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a table by replacing items in its definition.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table to update.<br/>

### Get a table's categories.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get the table's data.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update the table's data.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table on which to update the data.<br/>

### Get the security information of the specified security item associated with the table for a specified user.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table for the security to be checked.<br/>
* `userIdentity` - _required_ - The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.<br/>
* `forceRefresh` - _optional_ - Indicates if the security cache should be refreshed before getting security information. The default is 'false'.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve the security entries associated with the table based on the specified criteria. By default, all security entries for this table are returned.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table.<br/>
* `nameFilter` - _optional_ - The name query string used for filtering security entries. The default is no filter.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a security entry owned by the table.

*Tags:* `Table`

#### Input Parameters
* `webId` - _required_ - The ID of the table where the security entry will be created.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Delete a security entry owned by the table.

*Tags:* `Table`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the table where the security entry will be deleted.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve the security entry associated with the table with the specified name.

*Tags:* `Table`

#### Input Parameters
* `name` - _required_ - The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.<br/>
* `webId` - _required_ - The ID of the table.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a security entry owned by the table.

*Tags:* `Table`

#### Input Parameters
* `name` - _required_ - The name of the security entry.<br/>
* `webId` - _required_ - The ID of the table where the security entry will be updated.<br/>
* `applyToChildren` - _optional_ - If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.<br/>

### Retrieve a Time Rule Plug-in by path.
> This method returns a Time Rule Plug-in based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `TimeRulePlugIn`

#### Input Parameters
* `path` - _required_ - The path to the Time Rule Plug-in.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a Time Rule Plug-in.

*Tags:* `TimeRulePlugIn`

#### Input Parameters
* `webId` - _required_ - The ID of the Time Rule Plug-in.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Retrieve a Time Rule by path.
> This method returns a Time Rule based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.<br/>

*Tags:* `TimeRule`

#### Input Parameters
* `path` - _required_ - The path to the Time Rule.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a Time Rule.

*Tags:* `TimeRule`

#### Input Parameters
* `webId` - _required_ - The ID of the Time Rule.<br/>

### Retrieve a Time Rule.

*Tags:* `TimeRule`

#### Input Parameters
* `webId` - _required_ - The ID of the Time Rule.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a Time Rule by replacing items in its definition.

*Tags:* `TimeRule`

#### Input Parameters
* `webId` - _required_ - The ID of the Time Rule.<br/>

### Retrieve a unit class by path.

*Tags:* `UnitClass`

#### Input Parameters
* `path` - _required_ - The path to the unit class.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a unit class.

*Tags:* `UnitClass`

#### Input Parameters
* `webId` - _required_ - The ID of the unit class.<br/>

### Retrieve a unit class.

*Tags:* `UnitClass`

#### Input Parameters
* `webId` - _required_ - The ID of the unit class.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a unit class.

*Tags:* `UnitClass`

#### Input Parameters
* `webId` - _required_ - The ID of the unit class.<br/>

### Get the canonical unit of a unit class.

*Tags:* `UnitClass`

#### Input Parameters
* `webId` - _required_ - The ID of unit class.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Get a list of all units belonging to the unit class.

*Tags:* `UnitClass`

#### Input Parameters
* `webId` - _required_ - The ID of unit class.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Create a unit in the specified Unit Class.

*Tags:* `UnitClass`

#### Input Parameters
* `webId` - _required_ - The ID of the server.<br/>

### Retrieve a unit by path.

*Tags:* `Unit`

#### Input Parameters
* `path` - _required_ - The path to the unit.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Delete a unit.

*Tags:* `Unit`

#### Input Parameters
* `webId` - _required_ - The ID of the unit.<br/>

### Retrieve a unit.

*Tags:* `Unit`

#### Input Parameters
* `webId` - _required_ - The ID of the unit.<br/>
* `selectedFields` - _optional_ - List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.<br/>

### Update a unit.

*Tags:* `Unit`

#### Input Parameters
* `webId` - _required_ - The ID of the unit.<br/>

## License

**flow**ground :- Telekom iPaaS / pi-web-api-2017-swagger-spec-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
