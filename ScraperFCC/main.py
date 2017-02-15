# setup library imports
# coding: utf-8
import io, time, json, math
import requests
from bs4 import BeautifulSoup

def retrieve_html(url):
    """
    Return the raw HTML at the specified URL.

    Args:
        url (string):

    Returns:
        raw_html (string): the raw HTML content of the response, properly encoded according to the HTTP headers.
    """

    # Write solution here
    resp = requests.get(url)
    return resp.content

def parse(html):
    """
       Parse the titles and subtitles in a page

       Args:
           html (string): String of HTML corresponding to a Yelp restaurant

       Returns:
           list of dictionary
           [{get-started}, {front-end}, {back-end}...]
               inside {front-end}:
               {{name:html&css, url:link-to-html&css}, {bootstrap}...}
               inside {bootstrap}
               {{name:what-is-bootstrap, url:link-to-what-is-bootstrap}...}
       """

    soup = BeautifulSoup(html, "html.parser")
    l = []

    accordion = soup.find("div", {"id": "accordion"})
    for span in accordion.find_all("span"):

        name = span.text.strip()
        if len(name) > 1:
            if name != u'Incomplete':
                if name != u'Coming Soon':
                    if name[0] != u'(':
                        l.append(name.encode('utf-8'))

    return l


def write_to_md(l, filename):
    count = 1
    target = open(filename, 'w')
    for title in l:
        s = str(count) + '. ' + title + '\n'
        target.write(s)
        count += 1

    target.close()

# main()
# the intrested content is inside iframe, bf4 cannot load that
html = retrieve_html("http://freecodecamp.cn/map-aside")
l = parse(html)
write_to_md(l, "test.md")
