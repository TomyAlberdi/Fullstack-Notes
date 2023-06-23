package com.example.BackendNotas.Repository;

import com.example.BackendNotas.Entity.Note;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n WHERE n.user_id = ?1")
    public List<Note> getByUserId(Long id);

    @Query("SELECT n FROM Note n WHERE n.user_id = ?1 AND (n.title LIKE %?2% OR n.text LIKE %?2%)")
    public List<Note> searchNote(Long id, String string);

}
