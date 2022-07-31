def manual_query(url=url):
    cat = input('Category: \n')
    letter = input('First Letter of Item: \n')
    page = input('Page: \n')
    url = url.format(cat, letter, page)

    data = requests.get(url).json()
    total = data['total']

    # print(res)
    return data
