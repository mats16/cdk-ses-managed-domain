# API Reference

**Classes**

Name|Description
----|-----------
[ManagedIdentity](#cdk-ses-managed-domain-managedidentity)|*No description*


**Structs**

Name|Description
----|-----------
[ManagedIdentityProps](#cdk-ses-managed-domain-managedidentityprops)|*No description*



## class ManagedIdentity  <a id="cdk-ses-managed-domain-managedidentity"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ManagedIdentity(scope: Construct, id: string, props?: ManagedIdentityProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ManagedIdentityProps](#cdk-ses-managed-domain-managedidentityprops)</code>)  *No description*
  * **sesRegion** (<code>string</code>)  *No description* __*Optional*__
  * **subDomainName** (<code>string</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**arn** | <code>string</code> | <span></span>
**domainName** | <code>string</code> | <span></span>



## struct ManagedIdentityProps  <a id="cdk-ses-managed-domain-managedidentityprops"></a>






Name | Type | Description 
-----|------|-------------
**sesRegion**? | <code>string</code> | __*Optional*__
**subDomainName**? | <code>string</code> | __*Optional*__



