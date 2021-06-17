# API Reference

**Classes**

Name|Description
----|-----------
[ManagedDomain](#cdk-ses-managed-domain-manageddomain)|*No description*


**Structs**

Name|Description
----|-----------
[ManagedDomainProps](#cdk-ses-managed-domain-manageddomainprops)|*No description*



## class ManagedDomain  <a id="cdk-ses-managed-domain-manageddomain"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ManagedDomain(scope: Construct, id: string, props?: ManagedDomainProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ManagedDomainProps](#cdk-ses-managed-domain-manageddomainprops)</code>)  *No description*
  * **sesRegion** (<code>string</code>)  *No description* __*Optional*__
  * **subDomainName** (<code>string</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**domainName** | <code>string</code> | <span></span>



## struct ManagedDomainProps  <a id="cdk-ses-managed-domain-manageddomainprops"></a>






Name | Type | Description 
-----|------|-------------
**sesRegion**? | <code>string</code> | __*Optional*__
**subDomainName**? | <code>string</code> | __*Optional*__



