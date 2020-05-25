FactoryBot.define do
  factory :case_contact do
    association :creator, factory: :user
    association :casa_case

    contact_types { ["therapist"] }
    duration_minutes { 60 }
    occurred_at { Time.zone.now }
    contact_made { false }
  end
end
