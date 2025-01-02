var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41124116 \n 個人網站: https://mdecp2024.github.io/hw-41124116/content/index.html \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n 加入brython \n 如何將 brython加入至網頁 \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '如何利用 ShareX 與 Zoomit 拍攝電腦操作流程影片。 \n 如何加入 Brython 頁面, 並用來編寫 print 與 for 迴圈相關程式。 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11_hw', 'text': '以下影片說明如何利用近端可攜系統維護個人作業網站: \n 1. 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 第一題解答: "*"字號圖形 \n \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 第二題解答: 網頁上的方格與塗色 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': 'gist連結 \n for迴圈 \n 心得:透過網路搜尋能夠快速解決我的問題 \n 程式語法: \n range(1, 6) \xa0 會生成一個從 1 到 5 的數字範圍。 \n for i in range(1, 6) \xa0 用來遍歷這些數字。 \n print(f"數字: {i}") \xa0 會在每次迭代時輸出當前的數字。 \n \n gist連結 \n print迴圈 \n 心得:操作的部分跟 for迴圈一模一樣，差在這次要在程式裡新增print迴圈執行的元素，也能在網路上搜尋為你更快速解答 \n 程式語法: \n range(1, 6) \xa0 會產生一個範圍，包括數字 1 到 5。 \n print(f"數字: {i}") \xa0 會將每次迭代的數字打印出來。 \n 我們定義了一個包含手機名稱的列表 \xa0 fruits 。 \n for fruit in fruits \xa0 會遍歷列表中的每個元素，並使用 \xa0 print \xa0 打印出來。 \n i ** 2 \xa0 會計算每個數字的平方並打印出來。 \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': 'W13題目: 重疊方形 \n 程式語法: \n from browser import html #導入html函式庫 from browser import document as doc #導入document程式庫並在程式中命名(簡寫)為doc   # 利用 html 建立 canvas 超文件物件 canvas = html.CANVAS(width = 400,height = 400) #將變數canvas指定為html.CANVAS(width = 400,height = 400)  #意思是建立*(準備)一個400*400的空間(畫布) brython_div = doc["brython_div1"] #將變數brython_div指定為doc["brython_div1"] brython_div <= canvas #將canve指定為子元素加入倒brython_div中   # 每一格的 pixel 數 gs = 200   # gs*tc = canvas width and height   ctx = canvas.getContext("2d") #將ctx指定(簡寫)為canvas.getContext("2d") (獲取畫布（canvas）的 2D 繪圖上下文 (context)) width=1 #方形的寬 height=1 #方形的高   #第一個方形 for i in range(width):   for j in range(height):  #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")  ctx.lineWidth=1  ctx.strokeStyle=\'red\'  ctx.beginPath();  ctx.rect(i*gs,j*gs,gs,gs)  ctx.stroke();   #第二個偏移的方形 for i in range(width):   for j in range(height):  #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")  ctx.lineWidth=1  ctx.strokeStyle=\'red\'  ctx.beginPath();  ctx.rect(i*gs+100,j*gs+100,gs,gs) #gs+100代表往右下偏移100像素  ctx.stroke(); \n \n w13  作業 \n 程式語法: \n from browser import html from browser import document as doc \n # 建立 canvas 元素 canvas = html.CANVAS(width=500, height=500) brython_div = doc["brython_div1"] brython_div <= canvas \n # 定義圓心和半徑 x1, y1 = 200, 200 # 第一個圓的圓心 x2, y2 = 300, 300 # 第二個圓的圓心 radius = 141.4 # 圓的半徑 \n ctx = canvas.getContext("2d") \n # === 繪製第一個圓 === ctx.beginPath() ctx.arc(x1, y1, radius, 0, 2 * 3.14159) ctx.fillStyle = "black" ctx.fill() \n # === 繪製重疊區域 (黑色交集區塊) === ctx.save() # 保存繪圖狀態 ctx.beginPath() ctx.arc(x1, y1, radius, 0, 2 * 3.14159) ctx.clip() # 限制繪圖範圍為第一個圓 \n ctx.beginPath() ctx.arc(x2, y2, radius, 0, 2 * 3.14159) ctx.fillStyle = "black" ctx.fill() ctx.restore() # 恢復繪圖狀態 \n # === 填充第一個圓其他區域 === # 填充左半部分 (紫色) ctx.beginPath() ctx.moveTo(x1, y1) ctx.arc(x1, y1, radius, 3.14159, 3.14159 * 1.5, False) ctx.closePath() ctx.fillStyle = "Purple" ctx.fill() \n # 填充上半部分 (粉色) ctx.beginPath() ctx.moveTo(x1, y1) ctx.arc(x1, y1, radius, 3.14159 * 1.5, 0, False) ctx.closePath() ctx.fillStyle = "pink" ctx.fill() \n # 填充左下部分 (藍色) ctx.beginPath() ctx.moveTo(x1, y1) ctx.arc(x1, y1, radius, 3.14159 * 0.5, 3.14159, False) ctx.closePath() ctx.fillStyle = "blue" ctx.fill() \n # === 填充第二個圓區域 === \n # 填充右上部分 (粉色) ctx.beginPath() ctx.moveTo(x2, y2) ctx.arc(x2, y2, radius, 3.14159 * 1.5, 0, False) ctx.closePath() ctx.fillStyle = "pink" ctx.fill() \n # 填充右下部分 (橘色) ctx.beginPath() ctx.moveTo(x2, y2) ctx.arc(x2, y2, radius, 0, 3.14159 * 0.5, False) ctx.closePath() ctx.fillStyle = "orange" ctx.fill() \n # 填充下半部分 (綠色) ctx.beginPath() ctx.moveTo(x2, y2) ctx.arc(x2, y2, radius, 3.14159 * 0.5, 3.14159, False) ctx.closePath() ctx.fillStyle = "green" ctx.fill() \n # === 繪製輔助框架與對角線 === # 繪製兩個圓的邊框 ctx.lineWidth = 2 ctx.strokeStyle = "black" ctx.beginPath() ctx.arc(x1, y1, radius, 0, 2 * 3.14159) ctx.stroke() \n ctx.beginPath() ctx.arc(x2, y2, radius, 0, 2 * 3.14159) ctx.stroke() \n # 繪製正方形框架 ctx.lineWidth = 2 ctx.strokeStyle = "red" \n # 第一個正方形 ctx.beginPath() ctx.rect(100, 100, 200, 200) ctx.stroke() ctx.fillStyle = "orange" # 填充顏色 ctx.fill() # 第二個正方形 ctx.beginPath() ctx.rect(200, 200, 200, 200) ctx.stroke() ctx.fillStyle = "pink" # 填充顏色 ctx.fill() # 繪製對角線 ctx.lineWidth = 2 ctx.strokeStyle = "black" ctx.beginPath() ctx.moveTo(100, 100) ctx.lineTo(300, 300) ctx.stroke()', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_hw', 'text': '', 'tags': '', 'url': 'w14_hw.html'}, {'title': 'w15', 'text': '題目一: 從 1 累加到 100 \n 程式語法: \n 初始化 \xa0 total = 0 ，用來儲存累加的結果。 \n 使用 \xa0 for i in range(1, 101) ，讓 \xa0 i \xa0 從 1 迭代到 100（ range(1, 101) \xa0 會產生 1 到 100 的範圍）。 \n 在迴圈內， total += i \xa0 會將每個數字 \xa0 i \xa0 加到 \xa0 total \xa0 中。 \n 最後， print \xa0 會顯示最終的累加結果。 \n 心得: 從 1 累加到 100 的程式，雖然很簡單，我利用網路搜尋了解如何利用程式來進行數字的累加運算，學會了Python 中的基本語法和邏輯結構。 \n \n 題目二: addto \n 程式語法: \n addto(start, end) \xa0 函式接受兩個參數： start \xa0 和 \xa0 end ，表示要累加的數字範圍。 \n total = 0 \xa0 用來儲存累加的結果。 \n for i in range(start, end + 1) \xa0 使用 \xa0 range \xa0 函式來生成從 \xa0 start \xa0 到 \xa0 end \xa0 的數字。 \n 在迴圈內， total += i \xa0 會將每個數字累加到 \xa0 total \xa0 變數中。 \n 最後， return total \xa0 返回累加的總和。 \n 當你調用 \xa0 addto(1, 100) \xa0 時，這個函式會計算從 1 到 100 的總和並輸出結果。 \n 心得: \xa0 addto(start, end) \xa0函式，Python 中的函式設計、循環結構以及累加運算，對 Python 基礎語法和編程邏輯的掌握，小困難但有網路搜尋的幫助讓我更順利。 \n \n 題目三: add_only_even \n 程式語法: \n add_only_even(start, end) \xa0 函式接受兩個參數 \xa0 start \xa0 和 \xa0 end ，表示數字範圍。 \n total = 0 \xa0 用來儲存累加的結果。 \n for i in range(start, end + 1) \xa0 會遍歷從 \xa0 start \xa0 到 \xa0 end \xa0 之間的每個整數。 \n if i % 2 == 0 \xa0 用來檢查每個數字是否是偶數。如果是偶數，則將其加到 \xa0 total \xa0 中。 \n 最後， return total \xa0 返回累加的偶數總和。 \n 心得: add_only_even(start, end) \xa0函式，讓我更加了解如何使用 Python 中的基本語法和結構（如循環、條件判斷和函式設計），Python 程式讓我知道他的好用，總有一天需要用到他的。 \n \n 題目四: add_avoid_8 \n 程式語法: \n add_avoid_8(start, end) \xa0 函式接受兩個參數 \xa0 start \xa0 和 \xa0 end ，表示數字範圍。 \n total = 0 \xa0 用來儲存累加的結果。 \n for i in range(start, end + 1) \xa0 用來遍歷從 \xa0 start \xa0 到 \xa0 end \xa0 之間的每個整數。 \n if \'8\' in str(i) \xa0 用來檢查數字 \xa0 i \xa0 是否包含 "8"。這是通過將數字 \xa0 i \xa0 轉換為字串，然後檢查其中是否含有 "8"。 \n continue \xa0 表示如果數字包含 "8"，則跳過這個數字，不進行累加。 \n 如果數字不包含 "8"，則使用 \xa0 total += i \xa0 累加到總和。 \n 最後， return total \xa0 返回累加的結果。 \n 心得:這次的作業讓我學會如何在 Python 中設計具條件篩選的累加函式，可以利用在程式中使用條件語句、字串操作和循環結構來解決問題，Python 語言用很簡單的語法來快速完成複雜的邏輯處理讓我做事更有效率。 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '作業連結 \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};