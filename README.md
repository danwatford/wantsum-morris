# Wantsum Morris Men Website Sources

Jekyll sources for Wantsum Morris Men website.

The website is hosted at https://wantsum-morris.org.uk

## Building the site
This site is built using Jekyll (https://jekyllrb.com/) and depends on 
having Ruby (https://www.ruby-lang.org/en/) installed on your build host.

It has been tested using the following version of Ruby (ruby --version):
- ruby 2.4.3p205 (2017-12-14 revision 61247) [x64-mingw32]

To install Jekyll on your build host run (See Jekyll site for info):
- gem install bundler jekyll

Change to the directory containing these sources and run:
- bundle exec jekyll serve

The above command will:
- build the site, placing the results in directory _site.
- serve the contents of _site at http://localhost:4000.
- detect changes to the site sources and rebuild.
