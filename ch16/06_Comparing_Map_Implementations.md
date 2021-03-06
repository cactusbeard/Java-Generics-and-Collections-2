《《《 [返回首页](../README.md)       <br/>
《《《 [上一节](05_ConcurrentNavigableMap.md)

### 比较Map的实现

表 `16-1` 显示了 `Map` 的不同平台实现的相对性能（“next”栏显示迭代器在密钥集上的下一次操作的开销）。 与队列的实现一样，您对 `map` 类的选择可能更多地受
到应用程序的功能需求和所需的并发属性的影响。

一些特殊情况决定了实现：`EnumMap` 应该总是（并且仅仅）用于从枚举映射。 诸如第 `16.2.4` 节描述的图遍历等问题需要 `IdentityHashMap`。 对于有排序的 
`Map`，请使用不需要线程安全性的 `TreeMap`，否则使用 `ConcurrentSkipListMap`。

表 `16-1`。 不同 `Map` 实现的比较性能

　 |get |containsKey| next |Notes
---|--- |---        |---   |---
HashMap |O(1) |O(1) |O(h/n) |h是表格容量
LinkedHashMap |O(1) |O(1)| O(1)|
IdentityHashMap |O(1) |O(1) |O(h/n) |h是表格容量
EnumMap |O(1) |O(1) |O(1)|
TreeMap |O(log n) |O(log n)| O(log n)|
ConcurrentHashMap |O(1) |O(1) |O(h/n)| h是表格容量
ConcurrentSkipListMap| O(log n)| O(log n)| O(1)|

这就为通用地图留下了实施的选择。 对于并发应用程序，`ConcurrentHashMap` 是唯一的选择。 否则，如果您需要使用映射的插入或访问顺序（例如，将其用作缓存），
则可以优先使用 `HashMap` 上的 `LinkedHashMap`（并接受其稍差的性能）。

《《《 [下一节](../ch17/00_The_Collections_Class.md)      <br/>
《《《 [返回首页](../README.md)
