## <center>Graph Drawing
### <center>Peter Edges
---
### 1. Graph
input: data->output: nice picture(planar drawing)  
> 好的Graoh举例：最短路径、模块化结构

Difficulty: Choose a good layout  
Vertices: entity, a location for each vertex  
Edges: relationship, a curve for each edge

Good drawing of graph:  
Satisfied to faithfulness(tell the truth) and readability  
Data—(visualization) --> drawing—(perception) --> human***
### 2. Readability: help human understand
Relationship graph: (two factor affecting readability)  
- Edge crossing
- Edge bends

Vertex resolution:  
- Modelled as points***
- Grid drawing and vertex resolution
- Goot vs bad graph drawing***
### 3. Faithfulness(100% is impossible)
The ability to reproduce the data by look at drawing
> Visualization function should be One to one   
---
## <center>Graph visualization for small graphs: topology-shape-metrics
### 1. Planar: no edge crossings
*Makes beautiful pictures*  
How to prove a pic is not planar?  
- Kuratowski’s Theorem（图论）
- Theorems: ***(totally 5 examples)

>Most real graphs are not planar but nearly be by delete ‘n edges’

Finding a elegant linear time planarity testing algorithm is an unsolved problem:  
Graph drawing -> embedding -> graph ***  
> The dual graph of the drawing（图论点线互换）***

Topologically equivalent: (Homeomorphism)***  
1. Same dual graph
2. Same clockwise circular ordering（图论，转圈点顺序） edges around each vertex
> Placing dummy vertices（去除多余线）***
### 2. Graph deawings
G = (V, E)  
> Location p for each vertex u  
Jordan arc c(u, v) for each edge (u, v)

Steps: input -> algorithm(topology, shape, metrics) -> output***  
algorithm(topology, shape, metrics):  
1. topology: topologys shape method metrics***  
> find a spanning tree and test*** m’ > 1/3 m*
2. shape: as straight as possible  
Assumption: the degree of the point is less than 4  
An abstraction of the direction of the edge*** 例：用方向序列记录路线）  
- 用少量的数字记录形状minimum number of bends  
> Tamassia’s algorithm***   
2(a + b – 4) * PI/2    

- The sum of angels around a point is 2 * PI***  
用角度估计边的交叉情况***
3. metrics: to give good vertex resolution of drawing  
			Compaction in x and y direction  
> topologys shape method metrics：
	大规模的图通常很难看  
小图绘制的可用情况：  
- |V| + |E| <= 20-40： 手绘更好  
- |V| + |E| ~= 100：不适合手绘
---
## <center>Forces and Spectral Methods: Large Graph Visualization
### 1. Force directed graph drawing
Physical analogy,V：主体，E：力关系 
Minimal energy  
Model and Algorithm
- Model: force system; energy system
- Algorithm: optimization methods  

4种力计算模型:  
a. Barycenter Method: always push in, never push out***  
  > Nu = neighbors of u = { v: (u, v) 包含于 E }  
  
b. Springs & Electrical Forces  
- 胡克定律***  
> 常量αβγ代表什么***  
效率很低，因为要计算一个点和其他所有点的电力作用
Metro Map Problem（例：轻轨地图）  
Metro Map Layout
c. Large graphs: Multilevel approaches  
- 将图的各个分开的部分看成点***  
- Barnes-Hutt method（四叉树矩形分割，找到距离相近的点，和最近的其他某个点结合成一个点）***  
- 递归找子树：如何判断已经找到了好的方案？取决于开始点和子树的距离***  
### 2. Spectral Layout记录点与点之间的连接信息***
Adjacency Matrix M***  
Degree Matrix D  
Laplacian Matrix L: nice matrix, eigenvalues are nice***  
- Spectrum of L  
- Fan Chong. Spectral Graph theory  
- 矩阵特征值M x = λ x   
> XTLX is a kind of energy  
拉普拉斯特征值代表了边的最小能量  
spectral layout should give : faithful clusters,   faithful commute distances  
---
## <center>Remarks
- dge crossings are not important if the crossing angle is large.
- The Drawing should be an accurate presentation of the data.
- Original Graph –visualization functionsDrawing***
- Interact: zoom, pan, filter (on Logical is better than Geographical)	
- Animation: affine motion is better than linear interpolation
- 3D: 2.5D better
- Region metaphors, Gmap, Matrix metaphor

