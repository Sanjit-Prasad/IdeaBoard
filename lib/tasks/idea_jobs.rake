task idea_jobs: :environment do
    idea = []
    20.times do
        idea << Idea.new(
            title: Faker::Quote.robin,
            body: Faker::Quotes::Rajnikanth.joke            
        )
    end

    Idea.import(idea)
    puts 'Idea Job Completed :)'
end