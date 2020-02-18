FROM ruby:2.6.3-buster

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y nodejs postgresql-client yarn && \
    gem install bundler:2.1.2

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp
RUN bundle install
RUN yarn install --check-files

EXPOSE 3000
CMD ["bin/rails", "server", "-p", "3000", "-b", "0.0.0.0"]
