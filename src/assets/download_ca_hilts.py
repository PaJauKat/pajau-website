import os
import requests

# La wiki requiere un User-Agent identificado para no bloquear la petición
headers = {'User-Agent': 'GhommalHiltDownloader/1.0'}
output_dir = 'ca_hilts'
os.makedirs(output_dir, exist_ok=True)

for i in range(1, 7):
    file_title = f"File:Ghommal's_hilt_{i}.png"
    api_url = "https://oldschool.runescape.wiki/api.php"
    params = {
        'action': 'query',
        'titles': file_title,
        'prop': 'imageinfo',
        'iiprop': 'url',
        'format': 'json'
    }
    
    response = requests.get(api_url, headers=headers, params=params).json()
    pages = response['query']['pages']
    
    for page_id, page_data in pages.items():
        if 'imageinfo' in page_data:
            img_url = page_data['imageinfo'][0]['url']
            img_data = requests.get(img_url, headers=headers).content
            
            file_path = os.path.join(output_dir, f"Ghommal_hilt_{i}.png")
            with open(file_path, 'wb') as f:
                f.write(img_data)
            print(f"Descargada exitosamente: Ghommal_hilt_{i}.png")