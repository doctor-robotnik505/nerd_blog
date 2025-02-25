#Программирование 
```python
import requests  # Модуль позволяет работать с URL-запросами  
from bs4 import BeautifulSoup as bs4  # Модуль позволяет разбивать информацию на блоки  
  
headers = {  
    'accept': '*/*',  
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1.1 Safari/605.1.15'  
}  
  
url = "https://itproger.com"  
session = requests.Session()  
  
req = session.get(url, headers=headers)  # Первый параметр - URL-адрес, второй параметр - заголовки  
if req.status_code == 200:  
    soup = bs4(req.content, 'html.parser')  
    div_article = soup.find_all('div', attrs={'class': 'article'})  # Находим все теги div с классом article  
    print(div_article)  
    for div in div_article:  
        titles = div.find('a').text  # Находим первую ссылку внутри каждой статьи и выводим её в виде текста  
        href = div.find('a').get('href')  
        print("{} - https://itproger.com/{}".format(titles, href))
```