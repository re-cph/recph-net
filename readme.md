# How to start

## Option 1: 
```
bundle exec jekyll serve
```

## Option 2 (Docker required): 
```
docker compose up

docker run -v ./:/site -it --entrypoint bash bretfisher/jekyll
bundle exec jekyll build --watch
```

## Option 3 - last option working for Vesters (Docker required): 
```
docker run -v ./:/site -it --entrypoint bash bretfisher/jekyll
bundle exec jekyll build --watch
```
