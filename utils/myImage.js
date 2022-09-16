// 获取到当前有多少张图片要摆放
function myImgLocation(parent, content, group) {
  // 将containerd下所有的内容全部取出
  var cparent = document.getElementById(parent)  //获取container盒子的标签
  var ccontent = getChildElemnt(cparent, content, group)//图片时放在container盒子里的box盒子里的，因此我们还需要定义一个函数getChildElemnt（）获取出box里的图片
  
  for (var j = 1; j < ccontent.length; j++) {
    if (ccontent[j].length == 0) {
      continue
    }
    var imgWidth = ccontent[j][0].offsetWidth // 初始宽度
    var currTop = 0 // 初始顶部位置
    for (var i = 0; i * 2 < ccontent[j].length; i++) {
      if (i * 2 + 1 >= ccontent[j].length) {
        
      }
    }

    var num = 0
    var offsetLeft = 0
    for (var i = 0; i < ccontent[j].length; i++) {
      if (offsetLeft <= ccontent[j][i].offsetLeft) {
        num++
        offsetLeft = ccontent[j][i].offsetLeft
      } else {
        break
      }
    }
    // cparent.style.cssText = `width: ${imgWidth * num} px`
   
    //摆放图片
    var BoxHeightArr = [] 
    for (var i = 0; i < ccontent[j].length; i++) { 
      if (i < num) {  //我们先将第一行摆满
        BoxHeightArr[i] = ccontent[j][i].offsetHeight //这里我们通过BoxHeightArr[]数组存放每列的高度
      } else { //剩下的图片我们依次次优先选择摆在高度最低的一列后面
        var minHeight = Math.min.apply(null, BoxHeightArr) //通过将Math.min()中求最小值的方法应用到数组中，求出高度最低的列
        var minIndex = getMinHeightLocation(BoxHeightArr, minHeight) //确定了高度最低的列后我们就差求出列的位置了,我们通过编写一个函数实现

        // 最后将我们的图片相对于container盒子进行定位放在每一列下就可以啦
        ccontent[j][i].style.position = 'absolute'
        ccontent[j][i].style.top = minHeight + 'px'
        ccontent[j][i].style.left = ccontent[j][minIndex].offsetLeft + 'px'
        // 最后不忘记跟新每一列的高度哦
        BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[j][i].offsetHeight
      }
    }

    var maxHeight = Math.max.apply(null, BoxHeightArr)
    ccontent[0][j - 1].style.height = maxHeight + 'px'
  }

}

function getChildElemnt(parent, content, group) {
  const contentGroup = []
  var groupList = []
  contentGroup.push(groupList)
  var contentArr = []
  const allContent = parent.getElementsByTagName('*')//通过内置函数getElementsByTagName()将container中的所有元素取出来
  for (var i = 0; i < allContent.length; i++) { // 但是container中所有的元素中我们只需要的是所有的img，为此我们写个for循环将所用img筛选出来存放在一个数组中
    if (allContent[i].className == group) {
      if (groupList.length != 0) {
        contentGroup.push(contentArr)
        contentArr = []
      }
      groupList.push(allContent[i])
    }
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }
  contentGroup.push(contentArr)
  console.log(contentGroup)
  return contentGroup
}

//获取列最高度最小列的位置下标函数
function getMinHeightLocation(BoxHeightArr, minHeight) {
  for (var i in BoxHeightArr) {
    if (BoxHeightArr[i] === minHeight) {
      return i
    }
  }
}