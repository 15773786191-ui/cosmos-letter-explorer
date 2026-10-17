// Questions and explanations checked against the linked NASA fact pages.
// Model sizes, positions, motion speeds and material colours are illustrative.
export const planets = [
 {id:'mercury',name:'水星',kind:'岩石行星',color:'#b9afa4',texture:'mercury',position:[-15,1,10],radius:.55,tag:'离太阳最近，却不是最热',source:'https://science.nasa.gov/mercury/facts/',scenes:[
  {title:'离太阳最近，为什么不是最热？',text:'水星白天的表面可达到约 430℃，夜晚却可降到约 −180℃。它几乎没有能保温的大气，只有极稀薄的外逸层。太阳照到时升温，背向太阳后又容易散热。比较行星温度，除了离太阳多远，还要看大气。',control:'转动星球，对照朝向光源与背向光源的两侧',experiment:'daynight',observation:'亮的一侧表示受到照明，暗的一侧表示背向光源；这是方向示意，不是温度测量图。'},
  {title:'一“天”为什么可以比一年还长？',text:'水星绕太阳一周约 88 个地球日，但从一次日出到下一次日出，约需 176 个地球日。自转和公转是两种运动；“转一圈”也不等于“太阳回到天空同一位置”。谈一天多长，先说清用的是哪种定义。',control:'比较两把时钟',experiment:'clocks',observation:'公转一周：约 88 个地球日；日出到下一次日出：约 176 个地球日。'},
  {title:'那么热的地方，为什么还有冰？',text:'水星极区某些陨石坑的坑底长期照不到阳光，环境可以非常冷。一个星球的平均印象，不能代表它每个角落的条件。判断冰能否保存，需要看具体位置是否接受阳光。',control:'把视线移向极区，寻找“光照条件”这条线索',experiment:'rotate',observation:'普通贴图不能验证坑底是否永久阴影；这需要地形、太阳角度和探测数据。'}
 ],question:'解释金星比水星更热，应该优先补查什么？',answers:['两者的大气组成与保温作用','只把到太阳的距离再排一次'],answer:0,why:'距离影响接受的阳光，大气又影响能量怎样离开；只比较距离不能完整解释温度。',related:'venus'},
 {id:'venus',name:'金星',kind:'岩石行星',color:'#dfba82',texture:'venus_atmosphere',position:[-7,1,15],radius:.72,tag:'厚厚的云层，藏着什么？',source:'https://science.nasa.gov/venus/venus-facts/',scenes:[
  {title:'看起来明亮，不代表适合生活。',text:'金星和地球大小接近，却有非常不同的环境。它的大气主要是二氧化碳，厚厚的云层遮住地表。云层反射阳光，让金星从地球上看很明亮；明亮并不等于表面凉爽。',control:'调节云层的示意覆盖，区分“看到云”与“看到地面”',experiment:'atmosphere',observation:'这里用云层贴图展示金星外观；调节透明度只是帮助理解遮挡，并没有还原真实地表。'},
  {title:'为什么它比更近的水星还热？',text:'金星表面约 465℃。阳光带来能量，地表和大气又向外释放能量；浓厚的二氧化碳大气强烈影响红外辐射向外传递，形成极强的温室效应。不是大气里“着火”，也不能只用距离解释。',control:'比较入射阳光与向外散热两条路径',experiment:'heat',observation:'这张能量关系图不计算实际温度；它强调接受多少能量、能量怎样离开，需要一起考虑。'},
  {title:'如果站到地面，会遇到什么？',text:'除了高温，金星表面大气压力还约为地球海平面的 92 倍。它没有地球这样的海洋，云层中还有硫酸液滴。寻找宜居环境，要同时检查温度、压力、水和大气，而不是只找一颗与地球差不多大的球。',control:'比较地球与金星的表面条件',experiment:'conditions',observation:'大小相近只是一个条件，不能单独推出“适合人类居住”。'}
 ],question:'金星很亮，最合理的解释是哪一项？',answers:['它像太阳一样在核心核聚变发光','它的云层反射了大量阳光'],answer:1,why:'金星是行星，明亮的外观主要来自反射阳光；“亮”和“自己供能发光”要分清。',related:'mercury'},
 {id:'moon',name:'月球',kind:'地球的天然卫星',color:'#c4c5c7',texture:'moon',position:[6,1,11],radius:.5,tag:'月亮为什么每天不一样？',source:'https://science.nasa.gov/moon/facts/',scenes:[
  {title:'月亮的形状，真的在变化吗？',text:'月球本身还是一个球。太阳始终照亮它大致一半的表面；随着月球绕地球运行，我们看到的被照亮部分比例改变，于是出现月牙、半月和满月。普通月相不是地球阴影遮住月球。',control:'拖动观察角度，看看球面受光部分怎样变化',experiment:'phase',observation:'模型固定光源、改变观察方向，帮助理解可见亮面比例；没有按真实月球轨道运行。'},
  {title:'为什么总是看见同一面？',text:'月球自转一周和绕地球公转一周所需时间相同，约 27.3 天，所以它大致总用同一面朝向地球。它确实在自转。背面也会被太阳照亮，“背面”不是永远黑暗的一面。',control:'转动模型，区分“背面”与“背向太阳”',experiment:'rotate',observation:'这次是自由查看贴图，不是地月同步运动模拟。'},
  {title:'为什么那些坑能保存那么久？',text:'月球只有极稀薄的外逸层，没有地球上普遍的风雨和流水侵蚀。撞击留下的陨石坑因此能保存很久，但新的撞击仍会改变表面。比较月球与地球，就是在比较改变地表的不同过程。',control:'靠近观察陨石坑，再想想地球上的雨水与河流',experiment:'rotate',observation:'从圆形坑的分布寻找撞击线索；单凭一个圆形，仍不能确定所有地貌的成因。'}
 ],question:'为什么月球背面也能被照亮？',answers:['背面只是背向地球，不等于始终背向太阳','月球背面能自己发光'],answer:0,why:'朝向地球和朝向太阳是两种关系。月相、背面、月食也不是同一个概念。',related:'earth'},
 {id:'mars',name:'火星',kind:'岩石行星',color:'#cf7251',texture:'mars',position:[15,1,10],radius:.65,tag:'红色的星球，曾经有水吗？',source:'https://science.nasa.gov/mars/facts/',scenes:[
  {title:'它为什么是红色的？',text:'火星的岩石和尘土中含有铁；铁与氧发生反应，形成氧化铁，让很多区域呈现红褐色。像铁生锈的颜色，但火星并不是一整颗铁球。表面颜色是一条材料线索，不代表内部全由同一种东西组成。',control:'转动火星，比较明暗与表面颜色',experiment:'rotate',observation:'表面贴图经过处理，颜色帮助辨认地貌，不能替代岩石成分的实际测量。'},
  {title:'没有大海，为什么研究者还寻找水？',text:'火星上有古代河流和湖泊留下的地形线索，也有今天的水冰。液态水、冰、过去的水和现在的水，需要分开讨论。寻找旧河道，是为了追问火星以前的环境，并不表示画面里的每条沟今天都在流水。',control:'把镜头靠近，比较沟谷与周边高地',experiment:'rotate',observation:'模型能帮你观察外形；确定某条沟是否由水形成，还需要地形、矿物与探测证据。'},
  {title:'人能直接走出去呼吸吗？',text:'火星大气非常稀薄，主要由二氧化碳组成，平均表面温度约 −65℃。探测车可以在那里工作，人类却需要供氧、保温和抵御环境风险的设备。有陆地，不等于环境就像地球。',control:'对照“有地面”和“能生活”两个条件',experiment:'conditions',observation:'宜居性不是一道只看颜色或大小的判断题。'}
 ],question:'发现古河道后，哪句话最符合证据？',answers:['今天所有沟谷里都一定有液态水','这是研究过去流水活动的一条线索'],answer:1,why:'过去留下的地形证据，需要与今天的环境区分；一条线索还需要其他观测支持。',related:'earth'},
 {id:'jupiter',name:'木星',kind:'气态巨行星',color:'#d5b79a',texture:'jupiter',position:[16,1,-1],radius:1.2,tag:'那块红斑，是陆地还是风暴？',source:'https://science.nasa.gov/jupiter/jupiter-facts/',scenes:[
  {title:'条纹下面，有能站立的地面吗？',text:'木星主要由氢和氦构成。我们看到的条带是大气和云层，不是彩色大陆。向里面深入，压力与温度逐渐升高，物质状态改变；它没有地球那样明确的固体表面。',control:'转动木星，沿云带观察不同区域',experiment:'rotate',observation:'贴图展示外观；不能把一张云层照片当作内部剖面。'},
  {title:'大红斑为什么不是一块红色陆地？',text:'大红斑是木星大气中的巨大风暴。要认出风暴，除了颜色，还需要看连续图像中的旋转和变化。静态红斑只能告诉你外观，不能独自解释它怎样运动。',control:'放慢或加快模型自转，区分星球转动与风暴运动',experiment:'spin',observation:'这里控制的是整个模型的转速，没有模拟大红斑内部的真实流场。'},
  {title:'为什么它有这么多不同的卫星？',text:'卫星也不都是一样的岩石球：木卫一有强烈火山活动，木卫二的冰壳下面被认为存在海洋。研究它们，要把所在环境、内部能量和水联系起来。远离太阳的地方，也可能有值得寻找的液态水环境。',control:'从大气视角退一步，认识行星与卫星的区别',experiment:'rotate',observation:'下一步研究卫星时，应单独看它们的资料，不能把木星的性质套给卫星。'}
 ],question:'为什么木星上的一道条纹不能直接叫“大陆”？',answers:['我们看到的主要是大气与云层','所有行星的条纹都是海岸线'],answer:0,why:'先确认观测到的是哪一层，再给图像命名。地球陆地的经验不能直接套到气态巨行星。',related:'saturn'},
 {id:'saturn',name:'土星',kind:'气态巨行星',color:'#e6cc9f',texture:'saturn',position:[8,1,-12],radius:1,tag:'那一圈，真的像光盘吗？',source:'https://science.nasa.gov/saturn/facts/',scenes:[
  {title:'土星环是一整张硬盘吗？',text:'从远处看，环像连续的一圈；实际上，它由大量冰和岩石碎片构成，每块碎片都在绕土星运行。数量多、距离远，让它们在眼里连成一片。完整外形，不等于完整的一块材料。',control:'倾斜环的角度，看看为什么薄片会显得宽或窄',experiment:'rings',observation:'模型把颗粒简化为半透明环面，没有画出每一块碎片；别把模型的连续面当成真实结构。'},
  {title:'为什么环里还有空隙？',text:'土星环有不同区域和间隙。卫星的引力会影响环中颗粒的轨道；研究环，不只是记一个漂亮外形，还要问周围天体怎样相互作用。不同间隙的形成不能简单归为同一个原因。',control:'靠近查看环的分区，比较颗粒带与间隔',experiment:'rings',observation:'图中的环纹是结构示意，不是卡西尼探测器的测量数据。'},
  {title:'它的卫星，也只有冰和石头吗？',text:'土卫六有浓厚的大气，地表存在液态甲烷和乙烷的湖泊、河流；土卫二会喷出含水物质，冰壳下面存在全球性海洋。看到“湖”，先问是哪种液体，不能一律理解成地球的水。',control:'比较“看起来像湖”与“由什么组成”',experiment:'conditions',observation:'外形相似能提出问题，成分判断需要光谱、探测等证据。'}
 ],question:'土星环看起来连续，就能证明它是一块完整固体吗？',answers:['能，眼睛看见一整圈就足够','不能，远处的大量颗粒也能形成连续外观'],answer:1,why:'距离和数量会改变外观。解释结构时，要把“看起来怎样”和“实际上由什么组成”分开。',related:'jupiter'},
 {id:'uranus',name:'天王星',kind:'冰巨行星',color:'#a7d8dd',texture:'uranus',position:[-4,1,-16],radius:.85,tag:'一颗几乎躺着转的行星',source:'https://science.nasa.gov/uranus/facts/',scenes:[
  {title:'“躺着转”，到底是什么意思？',text:'天王星自转轴倾角约 98°。和大多数行星相比，它的轴几乎横躺，因此在绕太阳运行时，会出现很不一样的季节光照。“躺着”是相对轨道平面的说法，不是宇宙里有一张地板。',control:'调节轴的倾斜角度，比较直立与近乎横躺',experiment:'tilt',observation:'模型展示轴向差别，不模拟完整公转或真实季节温度。'},
  {title:'蓝绿色，从哪里来？',text:'天王星大气含有甲烷，甲烷吸收一部分红光，使反射到我们眼里的光偏蓝绿色。颜色要结合光与大气的相互作用理解，不能看到蓝色就认定表面有海洋。',control:'转动模型，先区分大气颜色与地表材料',experiment:'rotate',observation:'颜色是解释入口；这里的贴图不代表可供着陆的蓝色地面。'},
  {title:'“冰巨星”，是一颗巨大冰球吗？',text:'天王星内部含有大量与水、氨、甲烷相关的物质，处于高温高压环境。“冰巨星”是行星分类名称，不能按家里冰箱里的冰来想象整个内部。分类词是起点，具体状态还要继续研究。',control:'比较分类名称和实际内部条件',experiment:'conditions',observation:'这里只展示外观。内部构成来自观测与模型研究，无法从表面颜色直接读出。'}
 ],question:'看到天王星偏蓝绿，能直接推断那里有地球式海洋吗？',answers:['不能，还要解释大气如何吸收与反射光','能，蓝色只能来自海水'],answer:0,why:'大气也能改变行星颜色。同一种颜色，可能对应不同材料与过程。',related:'neptune'},
 {id:'neptune',name:'海王星',kind:'冰巨行星',color:'#568bc9',texture:'neptune',position:[-16,1,-7],radius:.85,tag:'远离太阳，为什么仍有风暴？',source:'https://science.nasa.gov/neptune/neptune-facts/',scenes:[
  {title:'那么远，阳光变得怎样？',text:'海王星到太阳的距离约为地球的 30 倍。阳光向四周传播，距离增加时，同样大小的区域接到的能量减少。用到达大气顶端的同等面积来比较，太阳辐照约为地球的 1/900；这还不是实际表面温度。',control:'改变距离，比较同等面积接收到的阳光',experiment:'distance',observation:'倍数关系按平方反比做计算；没有加入反射、大气与内部能量。'},
  {title:'阳光很弱，为什么还有强风？',text:'海王星有猛烈的风和变化的风暴，并且向外释放的能量多于从太阳接收的能量。内部能量也是理解它的大气活动的线索，但复杂天气不能只用一个因素解释。',control:'把外部阳光与内部能量分开看',experiment:'heat',observation:'这张关系图不计算风速，也不模拟真实气象。'},
  {title:'一年那么长，会影响什么？',text:'海王星绕太阳一周约 165 个地球年。公转周期很长，观测完整季节变化就需要长期积累资料。行星研究不只是一次拍照，还要把不同时间的证据放在一起比较。',control:'比较一张图与长期观察',experiment:'clocks',observation:'单次图像提供一个时刻的外观，不能完整代表长期天气和季节。'}
 ],question:'海王星很远，为什么不能只用阳光解释它的环境？',answers:['因为距离完全不影响能量','因为还需要考虑内部能量、大气等条件'],answer:1,why:'距离仍然重要，但不是唯一因素。把能量来源与能量传递联系起来，才能提出更完整的问题。',related:'uranus'}
];
export const targetNames={sun:'太阳',mercury:'水星',venus:'金星',earth:'地球',moon:'月球',mars:'火星',jupiter:'木星',saturn:'土星',uranus:'天王星',neptune:'海王星'};
