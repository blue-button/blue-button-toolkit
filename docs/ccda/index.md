---
layout: docs
---

# Reference CCDA

Use the `medications` method to retrieve a list of all medications.

- This is an [example link](/docs).
- This is an [example link]({{ site.url }}/docs).

Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.

## Second Header

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.

```javascript
bb.medications();  // Returns all medications as an Array
```

And an example medication object:

{% highlight javascript %}
{
  product: {
    name: "Proventil 0.09 MG/ACTUAT inhalant solution",
    codeSystemName: "RxNorm",
    codeSystem: "2.16.840.1.113883.6.88",
    code: 573621
  },
  date: 20110301,
  directions: "2 puffs QID PRN wheezing",
  instructions: "Generic Substitution Allowed",
  status: "active",
  drug_vehicle: {
    name: "Diethylene Glycol",
    code_system_name: "SNOWMED CT",
    code_system: "2.16.840.1.113883.6.96",
    code: 5955009
  },
  indication: {
    name: "Bronchitis",
    code_system_name: "SNOWMED CT",
    code_system: "2.16.840.1.113883.6.96",
    code: 32398004
  }
}
{% endhighlight %}







