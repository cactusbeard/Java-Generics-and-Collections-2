《《《 [返回首页](../README.md)       <br/>
《《《 [上一节](05_Enumerated_Types.md)

### 多重界限

我们已经看到很多例子，其中类型变量或通配符由单个类或接口约束。 在极少数情况下，可能需要有多个边界，我们在这里展示了如何实现。

为了演示，我们使用 `Java` 库中的三个接口。 `Readable` 接口具有从源读取缓冲区的读取方法，`Appendable` 接口具有从缓冲区复制到目标的 `append` 方法，
而 `Closeable` 接口具有关闭方法来关闭源或目标。 可能的源和目标包括文件，缓冲区，流等。

为了获得最大的灵活性，我们可能希望编写一个复制方法，该方法使用实现 `Readable` 和 `Closeable` 的任何源以及实现 `Appendable` 和 `Closeable` 的任何
目标：

```java
public static <S extends Readable & Closeable,T extends Appendable & Closeable> void copy(S src, T trg, int size) throws IOException {
  try {
    CharBuffer buf = CharBuffer.allocate(size);
    int i = src.read(buf);
    while (i >= 0) {
      buf.flip(); // prepare buffer for writing
      trg.append(buf);
      buf.clear(); // prepare buffer for reading
      i = src.read(buf);
    }
  } finally {
    src.close();
    trg.close();
  }
}   
```

此方法从源重复读入缓冲区并从缓冲区追加到目标中。 当源为空时，它关闭源和目标。 （这个例子偏离了最佳做法，因为这些文件是在不同于打开文件的块中关闭
的。）第一行指定 `S` 范围在实现 `Readable` 和 `Closeable` 的任何类型上，并且对任何类型的 `Trailing` 实现 `Appendable` 和 `Closeable`。当出现一
个类型变量的多个边界时，它们用 `&` 符号分隔。 您不能使用逗号，因为它已经用于分隔类型变量的声明。

例如，可以使用两个文件作为源和目标或使用包含在缓冲区中的相同两个文件作为源和目标来调用此方法：

```java
int size = 32;
FileReader r = new FileReader("file.in");
FileWriter w = new FileWriter("file.out");
copy(r,w,size);
BufferedReader br = new BufferedReader(new FileReader("file.in"));
BufferedWriter bw = new BufferedWriter(new FileWriter("file.out"));
copy(br,bw,size);
```

其他可能的来源包括 `FilterReader`，`PipedReader` 和 `StringReader`，其他可能的目标包括 `FilterWriter`，`PipedWriter` 和 `PrintStream`。但是你
不能使用 `StringBuffer` 作为目标，因为它实现了 `Appendable` 而不是 `Closeable`。

如果你挑剔的话，你可能会发现实现 `Readable` 和 `Closeable` 的所有类都是 `Reader` 的子类，几乎所有实现 `Append ble` 和 `Closeable` 的类都是 
`Writer` 的子类。 所以你可能想知道为什么我们不像这样简化方法签名：

```java
public static void copy(Reader src, Writer trg, int size)
```

这将确实承认大部分相同的课程，但不是全部。 例如，`PrintStream` 实现了 `Appendable` 和 `Closeable`，但不是 `Writer` 的子类。 此外，你不能排除一些
使用你的代码的程序员可能有他或她自己的自定义类，比如实现 `Readable` 和 `Closeable`，但不是 `Reader` 的子类。

当出现多个界限时，第一个界限用于擦除。我们在第3.2节中提到了这一点：

```java
public static <T extends Object & Comparable<? super T>> T max(Collection<? extends T> coll)
```

如果没有突出显示的文本，`max` 的已擦除类型签名将具有 `Comparable` 作为返回类型，而在旧库中，返回类型为 `Object`。 第 `5` 章和第 `8.4` 节将进一步
讨论保持与遗留库的兼容性。

《《《 [下一节](07_Bridges.md)      <br/>
《《《 [返回首页](../README.md)
