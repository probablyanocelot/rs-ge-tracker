import json
import requests
from icecream import ic

# url = 'https://secure.runescape.com/m=itemdb_rs/api/info.json'
url = 'https://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category={}&alpha={}&page={}'


# ALL PARAMS NEEDED FOR QUERY
categories = [x for x in range(0, 42)]
letters = [chr(x) for x in range(ord('a'), ord('z')+1)]


def pages(total_entries):
    pages = total_entries // 12
    if total_entries % 12 != 0:
        pages = pages + 1
    ic(pages)
    return pages


def query(url=url):
    # categories 1-42
    for cat in categories:
        ic(cat)
        # a-z
        for letter in letters:
            ic(letter)

            # get total entries to calculate pages
            data = requests.get(url.format(cat, letter, 1)).json()
            total_entries = data['total']
            ic(total_entries)

            # get pages
            for page in range(1, pages(total_entries)+1):
                url = url.format(cat, letter, page)
                data = requests.get(url).json()

# FIX OVERWRITE (CAT.JSON -> PAGE.JSON)
# PROBABLY USE DB INSTEAD OF JSON (MONGO IS GOOD; MERN!)
                # save data to json file
                print(f'saving page {page} to {cat}.json')
                with open(f'{cat}.json', 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=4)
                print(f'saving page {page} to {cat}.json COMPLETE')


query()

# with open('query.json', 'w', encoding='utf-8') as f:
#     json.dump(data, f, ensure_ascii=False, indent=4)
